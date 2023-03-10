<?php
    class ManicController{

        static $file = '/www/wwwroot/manic/data';
        static $jobs = '/www/wwwroot/manic/data/jobs';
        static $data = '/www/wwwroot/manic/data/files';

        static function init(){
            // jobs sample: { "usage" : "1676104147.json", "apps" : "1676104147.json", "docs" : "1676104147.json", "client" : "KEN-MOM-KHA-001" }
            for($i=1; $i<=3; $i++){

                $file = self::load_file(self::$jobs);

                if($file == '') die('No jobs available');

                $jobs = file_get_contents(self::$jobs.'/'.$file);
                $jobs = json_decode($jobs, true);

                $usage = file_get_contents(self::$data.'/'.$jobs['usage']);

                $deviceName = json_decode($usage, true)[0]['DeviceName'];

                // replace the device name with the client name
                $usage = str_replace($deviceName, $jobs['client'], $usage);

                $apps  = str_replace($deviceName, $jobs['client'], file_get_contents(self::$data.'/'.$jobs['apps']));
                $docs  = str_replace($deviceName, $jobs['client'], file_get_contents(self::$data.'/'.$jobs['docs']));

                $school = ConfigsController::all()[0]; unset($school['id'], $school['last']); $school = json_encode($school);
                
                $data = array(
                    'school' => $school,
                    'usage'  => $usage,
                    'apps'   => $apps,
                    'docs'   => $docs
                );


                if(self::upload($data) == 'success') self::unset_file($file);
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
            
        }

        static function load_file($directory) {
            if(is_dir($directory)) {
                $scan = scandir($directory);
                unset($scan[0], $scan[1]); //unset . and ..
                foreach($scan as $file) {
                    if(strpos($file, '.json') !== false) {
                        return $file;
                    }
                }
            }
        }

        static function unset_file($file){
            exec('sudo rm -rf '.self::$jobs.'/'.$file);
        }
    }