<?php

function conn(){
	$servername = $_ENV['DB_HOST'];
	$username   = $_ENV['DB_USER'];
	$password   = $_ENV['DB_PASS'];
	$database   = $_ENV['DB_DATA'];

	$conn = new mysqli($servername, $username, $password, $database);
	return $conn;
}

// Test internet connection
// TODO : Camara SyncDB to be used for this
function is_connected($url = ''){

	if(empty($url)){
		$server = [$_ENV['SYNC_SERVER'], $_ENV['SYNC_ALTER1'], $_ENV['SYNC_ALTER2']];
		foreach($server as $url){
			$conn = @fsockopen($url, 80);
			if($conn){
				fclose($conn);
				return true;
			}
		}
	}else{
		$conn = @fsockopen($url, 80);
		if($conn){
			fclose($conn);
			return true;
		}
	}

	return false;
}

function sync_conn(){
	if(is_connected($_ENV['SYNC_SERVER']) == true){
		return $_ENV['SYNC_SERVER'];
	}elseif(is_connected($_ENV['SYNC_ALTER1']) == true){
		return $_ENV['SYNC_ALTER1'];
	}elseif(is_connected($_ENV['SYNC_ALTER2']) == true){
		return $_ENV['SYNC_ALTER2'];
	}else{
		die('connection could not be established');
	}
}

function get_user_role($id){
	switch($id){
		case 1: return 'Administrator';	break;
		case 2: return 'Teacher';		break;
		default: return 'Student'; 
	}
}

function getFileCount($path) {
	$size = 0;
	$ignore = array('.','..','cgi-bin','.DS_Store', '.htaccess', '*.png', '*.jpg', '*.jpeg');
	$files = scandir($path);
	foreach($files as $t) {
		if(in_array($t, $ignore)) continue;
		if (is_dir(rtrim($path, '/') . '/' . $t)) {
			$size += getFileCount(rtrim($path, '/') . '/' . $t);
		} else {
			$size++;
		}   
	}
	return $size;
}

?>