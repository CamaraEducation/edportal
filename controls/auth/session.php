<?php
namespace control;

use mysqli;

class Session{
    public static function init($user){
        $user   = strtolower($user);
        $data = "select * from users where username = '$user' or user_email = '$user'";
        $data   = mysqli_query(conn(), $data);

		//iterate the attained data to create a session
        foreach(mysqli_fetch_assoc($data) as $key=>$value){
			$_SESSION[$key] = $value;
		}

        return $_SESSION;
    }

}