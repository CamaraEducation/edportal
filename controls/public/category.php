<?php
class Category{
    public static function init(){

    }

    public static function fetch(){
        $sql = "SELECT * FROM video_category ORDER BY name";
        $sql = mysqli_query(conn(), $sql);

        return mysqli_fetch_all($sql, MYSQLI_ASSOC);
    }

    public static function create(){

    }
}
?>