<?php
    class Board{
        static function view($id){
            // curl get request to HTTP_HOST:8080/api/getReadOnlyWid?wid=veros
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, 'http://'.$_SERVER['HTTP_HOST'].':8080/api/getReadOnlyWid?wid='.$id);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            $output = curl_exec($ch);
            curl_close($ch);
            return $output;

        }
    }