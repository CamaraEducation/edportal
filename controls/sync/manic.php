<?php
    class ManicController{

        static $file;
        static $jobs;
        static $data;


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
            $apps  = $lastInsertedRows = self::calculate_last()['apps']+2500;
            $docs  = db()->fetchField('SELECT id FROM manic_docs ORDER BY id DESC LIMIT 1');

            return ['usage' => $usage, 'apps' => $apps, 'docs' => $docs];
        }

        static function get_usage($lastAvailableRows, $lastInsertedRows){

            $sql = "SELECT DeviceName, `Name`, DATE_FORMAT(StartLocalTime, '%Y-%m-%d %H:%i:%s') AS StartLocalTime, DATE_FORMAT(EndLocalTime, '%Y-%m-%d %H:%i:%s') AS EndLocalTime, Duration FROM `manic_usage` WHERE `id` > ? AND `id` <= ? limit 1000";
            $res = db()->fetchAll($sql, $lastInsertedRows, $lastAvailableRows);
            
            
            return json_encode($res);
            
        }

        static function get_apps($lastAvailableRows, $lastInsertedRows){
            // fetch the data from manic_apps
            $sql = "SELECT DeviceName, `Name`, DATE_FORMAT(StartLocalTime, '%Y-%m-%d %H:%i:%s') AS StartLocalTime, DATE_FORMAT(EndLocalTime, '%Y-%m-%d %H:%i:%s') AS EndLocalTime, Duration FROM `manic_apps` WHERE `id` > ? AND `id` <= ? ";
            $res = db()->fetchAll($sql, $lastInsertedRows, $lastInsertedRows+2500);
            
            
            return json_encode($res);

        }

        static function get_docs($lastAvailableRows, $lastInsertedRows){
            // fetch the data from manic_docs
            $sql = "SELECT DeviceName, `Name`, DATE_FORMAT(StartLocalTime, '%Y-%m-%d %H:%i:%s') AS StartLocalTime, DATE_FORMAT(EndLocalTime, '%Y-%m-%d %H:%i:%s') AS EndLocalTime, Duration FROM `manic_docs` WHERE `id` > ? AND `id` <= ? limit 1000";
            $res = db()->fetchAll($sql, $lastInsertedRows, $lastAvailableRows);

            // return the data:json
            return json_encode($res);
        }

    }
