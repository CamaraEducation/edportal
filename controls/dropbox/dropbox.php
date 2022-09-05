<?php
class DropboxControl{
    public static function create(){
        $name = mysqli_real_escape_string(conn(), $_POST['name']);
        $desc = mysqli_real_escape_string(conn(), $_POST['desc']);
        $type = mysqli_real_escape_string(conn(), $_POST['type']);
        $file = '/'. FileUploader::upload($file = 'file', $dir = 'dropbox/');

        $sql = "INSERT INTO dropbox VALUES (DEFAULT, '$name', '$desc', '$file', '$type', DEFAULT)";
        if(mysqli_query(conn(), $sql)):
            header('Location: /dropbox');
        endif;
        
    }

    public static function list(){
        $sql = "SELECT * FROM `dropbox`";
        $res = mysqli_fetch_all(mysqli_query(conn(), $sql), MYSQLI_ASSOC);

        return $res;
    }
}