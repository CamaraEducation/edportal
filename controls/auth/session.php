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
        
        LogsController::log_log_activity();

        return $_SESSION;
    }

    public static function auth($role=''){
        self::check();
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

    // static function that kills a session if there is no activity within 10 minutes
    public static function check(){
        if(isset($_SESSION['identifier']) && $_SESSION['identifier'] + 600 < $_SERVER['REQUEST_TIME']){
            self::destroy();
        }
    }

    public static function destroy(){
        session_destroy();
        header('Location: /');
    }

}