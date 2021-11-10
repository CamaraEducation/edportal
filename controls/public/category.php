<?php
class Category{
    public static function init(){

    }

    public static function fetch($type = 'video'){
        switch($type){
            case 'video':
                $sql = "SELECT * FROM video_category ORDER BY name";
                $sql = mysqli_query(conn(), $sql); break;
            case 'doc':
                $sql = "SELECT * FROM doc_category ORDER BY name";
                $sql = mysqli_query(conn(), $sql);
            break;
        }

            return mysqli_fetch_all($sql, MYSQLI_ASSOC);

    }

    public static function create(){

    }
}
?>