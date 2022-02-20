<?php
class ClassController{
    public static function fetch(){
        
    }

    public static function create() {
        $class = mysqli_real_escape_string(conn(), $_POST['class']);
        $sql = "INSERT INTO classes VALUES (DEFAULT, $class)";
        if(mysqli_query(conn(), $sql)){
            echo "success";
        } else {
            echo "error";
        }
    }
}
?>