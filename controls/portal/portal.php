<?php
class Portal{
    public static function configs(){
        $portal = "SELECT * FROM config";
        return (mysqli_fetch_assoc(mysqli_query(conn(), $portal)));
    }

    public static function fetch($name){
        $config = Portal::configs();
        return $config[$name];
    }
}
?>