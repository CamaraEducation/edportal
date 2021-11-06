<?php
class AppsControl{
    public static function fetch(){
        $sql = "SELECT * FROM apps";
        $sql = mysqli_query(conn(), $sql);
        $apps = mysqli_fetch_all($sql, MYSQLI_ASSOC);

        return $apps;
    }

    public static function create(){
        $app_name = mysqli_real_escape_string(conn(), $_POST['app_name']);
        $app_type = mysqli_real_escape_string(conn(), $_POST['app_type']);
        $app_path = mysqli_real_escape_string(conn(), $_POST['app_path']);
        $description = mysqli_real_escape_string(conn(), $_POST['description']);

        $banner = '/' . FileUploader::upload($file='thumbnail', $dir='apps/');

        $sql = "INSERT INTO apps VALUES (DEFAULT, '$app_name', '$app_type', '$app_path', '$description', '$banner')";
        if(mysqli_query(conn(), $sql)){
            header('Location: /apps');
        }else{
           echo 'something wrong';
        }
    }

    public static function app($id){
        $sql = "SELECT * FROM apps WHERE id = '$id'";
        $sql = mysqli_query(conn(), $sql);
        $app = mysqli_fetch_assoc($sql);

        return $app;
    }
}
?>