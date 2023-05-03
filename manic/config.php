<?php
    $start = file_get_contents('config.log');    
    $start = (int) $start; $start++;

    file_put_contents('config.log', $start);

    function numBeautify($num) {
        
        if ($num < 10) { return '00'.$num; }
        if ($num < 100) { return '0'.$num; }
        else return $num;

    }

    function conn(){

        $database = 'portal';
        $username = 'portal';
        $password = 'portal';
        $hostname = 'localhost';

        // connect to database
        $conn = new mysqli($hostname, $username, $password, $database);
        return $conn;
    }

    function getData(){
        $sql = "SELECT * FROM `config`";
        $res = mysqli_query(conn(), $sql);
        $res = mysqli_fetch_assoc($res);

        $id = substr($res['country'], 0, 3).'-'.substr($res['region'], 0, 3).'-'.substr($res['school'], 0, 3);

        return $id;
    }

   echo strtoupper(getData()."-".numBeautify($start));