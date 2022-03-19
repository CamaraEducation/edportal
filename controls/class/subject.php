<?php
class SubjectsController{
    public static function get($id){
        $sql = "SELECT * FROM subjects WHERE id='$id'";
        return mysqli_fetch_assoc(mysqli_query(conn(), $sql));
    }

    public static function content($type){
        if($type=='doc'){
            $sql = "SELECT DISTINCT category FROM document ORDER BY category ASC";
        }else{
            $sql = "SELECT DISTINCT category FROM video ORDER BY category ASC";
        }
        return mysqli_fetch_all(mysqli_query(conn(), $sql), MYSQLI_ASSOC);
    }
}
?>