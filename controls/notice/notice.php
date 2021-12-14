<?php
class Notice{
    public static function create(){
        $sender = $_SESSION['id'];
        $title  = mysqli_real_escape_string(conn(), $_POST['title']);
        $message = mysqli_real_escape_string(conn(), $_POST['message']);

        $sql =  "INSERT into notices VALUES (DEFAULT, '$title', '$message', '$sender')";
        if(mysqli_query(conn(), $sql)){
            header('Location: /');
        }else{
            echo '<pre>';
            print_r($_SESSION);
        }
    }
}
?>