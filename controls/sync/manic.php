<?php
    class ManicController{

        static $file;
        static $jobs;
        static $data;

        # initialize the paths
        static function initialize(){

            if(ConfigsController::get('last') >= 200):

                $path = [
                    'file' => '/www/wwwroot/manic/data',
                    'jobs' => '/www/wwwroot/manic/data/jobs',
                    'data' => '/www/wwwroot/manic/data/files'
                ];

            else:

                $path = [
                    'file' => '/www/wwwroot/upload/manic/data',
                    'jobs' => '/www/wwwroot/upload/manic/data/jobs',
                    'data' => '/www/wwwroot/upload/manic/data/files'
                ];

            endif;


            # initialize the static variables
            self::$file = $path['file'];
            self::$jobs = $path['jobs'];
            self::$data = $path['data'];

        }


        static function check_file(){
            exec("sudo chown -R www /www/wwwroot/manic/data/jobs && sudo chmod -R 777 /www/wwwroot/manic/data/jobs");
            exec("sudo chown -R www /www/wwwroot/manic/data/files && sudo chmod -R 777 /www/wwwroot/manic/data/files");
        }

        static function possess_file(){
            exec("sudo chmod 777 /www/wwwroot/default/.user.ini");
            // write an empty string .user.ini
            file_put_contents(".user.ini", "");
        }

        static function run(){
            // start a PHP server on localhost:82 in -t /www/wwwroot/default
            $command = "sudo php -S localhost:82 -t /www/wwwroot/default >/dev/null 2>&1 &";
            exec($command);

            self::possess_file();

            // wait for the server to start
            sleep(1);

            // make a cURL request to localhost:82/manic/sync/alter
            $url = "http://localhost:82/manic/sync/alter";
            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $response = curl_exec($ch);
            curl_close($ch);

            // return the response
            return $response;
        }

        static function init(){
            

            
            $lastAvailableRows = self::get_last_id();       # data: {usage:int, apps:int, docs:int}
            $lastInsertedRows = self::calculate_last();     # data: {usage:int, apps:int, docs:int};

        
            $school = ConfigsController::all()[0]; unset($school['id'], $school['last']); $school = json_encode($school);
            $usage = self::get_usage($lastAvailableRows['usage'], $lastInsertedRows['usage']);
            $apps  = self::get_apps($lastAvailableRows['apps'], $lastInsertedRows['apps']);
            $docs  = self::get_docs($lastAvailableRows['docs'], $lastInsertedRows['docs']);


            $data = array(
                'school' => $school,
                'usage'  => $usage ?? "",
                'apps'   => $apps ?? "",
                'docs'   => $docs ?? "" 
            );

            $response = self::upload($data);
            if($response == 'success' or $response == 'successsuccess') self::update_last($lastAvailableRows);

        }

        static function upload($data){
            // curl request to upload the data to the server
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, 'https://dashboard.camara.org/manic/v2/receive');
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $server_output = curl_exec($ch);
            curl_close ($ch);

            return $server_output;

        }

        static function load_file() {
            /*if(is_dir($directory)) {
                $scan = scandir($directory);
                unset($scan[0], $scan[1]); //unset . and ..
                foreach($scan as $file) {
                    if(strpos($file, '.json') !== false) {
                        return $file;
                    }
                }
            }*/

        }

        static function update_last($data){
            // data: {usage:int, apps:int, docs:int}
            db()->query("INSERT INTO manic_records VALUES (1, ?) ON DUPLICATE KEY UPDATE last = ?", json_encode($data), json_encode($data));
        }

        static function calculate_last(){
            // last type json: {usage:int, apps:int, docs:int}

            $last = json_decode(db()->fetchField('SELECT last FROM manic_records WHERE id = ?', 1), true);

            if(is_array($last)): return $last; endif;
            if(!is_array($last)): return ['usage' => 0, 'apps' => 0, 'docs' => 0]; endif;
        }

        static function get_last_id(){
            // fetch last id: `manic_usage`, `manic_apps`, `manic_docs`
            $usage = db()->fetchField('SELECT id FROM manic_usage ORDER BY id DESC LIMIT 1');
            $apps  = db()->fetchField('SELECT id FROM manic_apps ORDER BY id DESC LIMIT 1');
            $docs  = db()->fetchField('SELECT id FROM manic_docs ORDER BY id DESC LIMIT 1');

            return ['usage' => $usage, 'apps' => $apps, 'docs' => $docs];
        }

        static function get_usage($lastAvailableRows, $lastInsertedRows){

            $sql = "SELECT DeviceName, `Name`, DATE_FORMAT(StartLocalTime, '%Y-%m-%d %H:%i:%s') AS StartLocalTime, DATE_FORMAT(EndLocalTime, '%Y-%m-%d %H:%i:%s') AS EndLocalTime, Duration FROM `manic_usage` WHERE `id` > ? AND `id` <= ?";
            $res = db()->fetchAll($sql, $lastInsertedRows, $lastAvailableRows);
            
            
            return json_encode($res);
            
        }

        static function get_apps($lastAvailableRows, $lastInsertedRows){
            // fetch the data from manic_apps
            $sql = "SELECT DeviceName, `Name`, DATE_FORMAT(StartLocalTime, '%Y-%m-%d %H:%i:%s') AS StartLocalTime, DATE_FORMAT(EndLocalTime, '%Y-%m-%d %H:%i:%s') AS EndLocalTime, Duration FROM `manic_apps` WHERE `id` > ? AND `id` <= ? limit 1000";
            $res = db()->fetchAll($sql, $lastInsertedRows, $lastAvailableRows);
            
            
            return json_encode($res);

        }

        static function get_docs($lastAvailableRows, $lastInsertedRows){
            // fetch the data from manic_docs
            $sql = "SELECT DeviceName, `Name`, DATE_FORMAT(StartLocalTime, '%Y-%m-%d %H:%i:%s') AS StartLocalTime, DATE_FORMAT(EndLocalTime, '%Y-%m-%d %H:%i:%s') AS EndLocalTime, Duration FROM `manic_docs` WHERE `id` > ? AND `id` <= ?";
            $res = db()->fetchAll($sql, $lastInsertedRows, $lastAvailableRows);

            // return the data:json
            return json_encode($res);
        }

    }
