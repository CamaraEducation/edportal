<?php
    class ManicController{

        static $file = '/www/wwwroot/manic/data';
        static $jobs = '/www/wwwroot/manic/data/jobs';
        static $data = '/www/wwwroot/manic/data/files';

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
            // jobs sample: { "usage" : "1676104147.json", "apps" : "1676104147.json", "docs" : "1676104147.json", "client" : "KEN-MOM-KHA-001" }
            self::check_file();
            
            for($i=1; $i<=3; $i++){

                $file = self::load_file();

                if($file == '') die('No jobs available');

                $file = $file['files'];
                

                $jobs = shell_exec("cat ".self::$jobs.'/'.$file);
                $jobs = json_decode($jobs, true);

                $usage = shell_exec("cat ".self::$data.'/'.$jobs['usage']);

                $deviceName = json_decode($usage, true)[0]['DeviceName'];
                $deviceName = $deviceName ?? 'CAMARAC-N03VP2M';

                // replace the device name with the client name
                $usage = str_replace($deviceName, $jobs['client'], $usage);

                $apps  = str_replace($deviceName, $jobs['client'], shell_exec("cat ".self::$data.'/'.$jobs['apps']));
                $docs  = str_replace($deviceName, $jobs['client'], shell_exec("cat ".self::$data.'/'.$jobs['docs']));

                $school = ConfigsController::all()[0]; unset($school['id'], $school['last']); $school = json_encode($school);
                
                $data = array(
                    'school' => $school,
                    'usage'  => $usage,
                    'apps'   => $apps,
                    'docs'   => $docs
                );


                if(self::upload($data) == 'success') { self::unset_file($file); }
            }

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

            $file = db()->fetch("SELECT * FROM `manic_jobs` WHERE `status` = 'pending' ORDER BY `id` ASC LIMIT 1");
            return $file ?? '';

            
        }

        static function unset_file($file){
            //exec('sudo rm -rf '.self::$jobs.'/'.$file);
            db()->query("DELETE from `manic_jobs` where  files= ?", $file);
            //echo "DELETE from `manic_jobs` where  files= $file <br>";
        }
    }
