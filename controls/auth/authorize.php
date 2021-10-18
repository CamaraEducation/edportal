<?php
namespace control;

use mysqli;

class Authorize{
	//register user
	public static function register(){
		$user   = mysqli_real_escape_string(conn(), $_POST['user']);
		$email  = mysqli_real_escape_string(conn(), $_POST['email']);
		$pass	= md5(mysqli_real_escape_string(conn(), $_POST['pass']));

		$check = "select username, user_email from users where username = '$user' or user_email = '$email'";
		$check = mysqli_query(conn(), $check);

		if(mysqli_num_rows($check) > 0){
			$data = mysqli_fetch_assoc($check);
			if($data['username'] == $user){
				setcookie('notice', 'df_reg_201', time() + (180), "/"); 
			}else{
				setcookie('notice', 'df_reg_202', time() + (180), "/"); 
			}
		}else{
			$query = "insert into users (username, user_email, user_pass) values ('$user', '$email', '$pass')";
			if(mysqli_query(conn(), $query)){
				setcookie('notice', 'df_reg_200', time() + (180), "/"); 
			}else{
				setcookie('notice', 'df_reg_209', time() + (180), "/");
			}
		}
		
		header('Location: /notice/register');
	}

	//log the user
	public static function login(){
		$user = mysqli_real_escape_string(conn(), $_POST['email']);
		$pass = md5(mysqli_real_escape_string(conn(), $_POST['password']));

		$sql =  "select user_pass from users where username = '$user' or user_email = '$user'";
		if(mysqli_num_rows(mysqli_query(conn(), $sql)) > 0){
			$data = mysqli_fetch_assoc(mysqli_query(conn(), $sql));
			if($data['user_pass'] == $pass){
				Session::init($user);
				setcookie('notice', 'df_log_200', time() + (180), "/");
			}
		}else{
			setcookie('notice', 'df_log_201', time() + (180), "/");
		}

		header('Location: /notice/auth');

	}

	//reset user credentials
	public static function reset(){

	}

	//verify user session
	public static function verify(){

	}
}