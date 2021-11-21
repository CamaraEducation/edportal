<?php
class Session{
    public static function init($user){
        $user   = strtolower($user);
        $data = "select * from users where username = '$user' or user_email = '$user'";
        $data   = mysqli_query(conn(), $data);
        $_SESSION['identifier'] = $_SERVER['REQUEST_TIME'];

		//iterate the attained data to create a session
        foreach(mysqli_fetch_assoc($data) as $key=>$value){
			$_SESSION[$key] = $value;
		}

        return $_SESSION;
    }

    public static function auth($role=''){
        if(!empty($_SESSION)){
            header('Location: /');
        }
        if($role != ''){
            if($role > '1'){
                header('Location: /');
            }elseif($role > 4){
                header('Location: /');
            }elseif($role > 5){
                header('Location: /');
            }
        }
    }

}