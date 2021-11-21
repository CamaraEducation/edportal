<?php
class Category{
    public static function init(){

    }

    public static function fetch($type = 'subject'){
        switch($type){
            case 'subject':
                $sql = "SELECT * FROM subjects ORDER BY name";
                $sql = mysqli_query(conn(), $sql); break;
            case 'class':
                $sql = "SELECT * FROM classes ORDER BY name";
                $sql = mysqli_query(conn(), $sql);
            break;
        }
        return mysqli_fetch_all($sql, MYSQLI_ASSOC);
    }

    public static function create(){

    }
}
?>