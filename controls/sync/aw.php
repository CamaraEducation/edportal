<?php
class AWController{
    static function init(){

        $lastAvailableRows = self::get_max();       # data: {usage:int, apps:int}
        $lastInsertedRows = self::get_last();     # data: {usage:int, apps:int};

        $school = ConfigsController::all()[0]; unset($school['id'], $school['last']); $school = json_encode($school);
        $usage = self::get_usage($lastInsertedRows['usage'], $lastAvailableRows['usage']);
        $apps  = self::get_apps($lastInsertedRows['apps'], $lastAvailableRows['apps']);


        $data = array(
            'school' => $school,
            'usage'  => $usage ?? "",
            'apps'   => $apps ?? ""
        );

        $response = self::upload($data);
        if($response == 'success' or $response == 'successsuccess') self::update_last($lastAvailableRows);
    }

    static function upload($data){
        // curl request to upload the data to the server
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://dashboard.camara.org/aw/v2/receive');
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $server_output = curl_exec($ch);
        curl_close ($ch);

        return $server_output;

    }

    static function update_last($data){  # updates the last records inserted
        db()->query("INSERT INTO aw_records VALUES (1, ?) ON DUPLICATE KEY UPDATE last = ?", json_encode($data), json_encode($data));
    }

    static function get_last(){     # get the last synchronised rows
        $last = json_decode(db()->fetchField('SELECT last FROM aw_records WHERE id = ?', 1), true);

        if(is_array($last)): return $last; endif;
        if(!is_array($last)): return ['usage' => 0, 'apps' => 0]; endif;
    }

    static function get_max(){      # get the last rows of records
        $usage = db()->fetchField('SELECT id FROM aw_usage ORDER BY id DESC LIMIT 1');
        $apps  = db()->fetchField('SELECT id FROM aw_application ORDER BY id DESC LIMIT 1');

        return ['usage' => $usage, 'apps' => $apps];
    }

    static function get_usage($lastInsertedRows, $lastAvailableRows){
        $sql = "select devicename, username,duration, datetimeadded, cstatus from aw_usage WHERE `id` > ? AND `id` <= ?";
        $res = db()->fetchAll($sql, $lastInsertedRows, $lastAvailableRows);

        return json_encode($res);
    }

    static function get_apps($lastInsertedRows, $lastAvailableRows){

        $sql = "select devicename, username,duration, datetimeadded, app,title from aw_application WHERE `id` > ? AND `id` <= ?";
        $res = db()->fetchAll($sql, $lastInsertedRows, $lastAvailableRows);

        return json_encode($res);

    }
}