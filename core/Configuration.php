<?php
//mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

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
		$server = [$_ENV['SYNC_ALTER0'], $_ENV['SYNC_ALTER1'], $_ENV['SYNC_ALTER2']];
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

function is_sync($url = ''){
	if(empty($url)){
		$server = [$_ENV['SYNC_ALTER0'], $_ENV['SYNC_ALTER1'], $_ENV['SYNC_ALTER2']];
		foreach($server as $url){
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, $url);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
			$data = curl_exec($ch);
			curl_close($ch);
			if($data){
				return true;
			}
		}
	}else{
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
		$data = curl_exec($ch);
		curl_close($ch);
		if($data){
			return true;
		}
	}
	return false;
}

function sync_conn(){
	if(is_sync($_ENV['SYNC_ALTER0']) == true){
		return $_ENV['ALTER0_URL'];
	}elseif(is_sync($_ENV['SYNC_ALTER1']) == true){
		return $_ENV['ALTER1_URL'];
	}elseif(is_sync($_ENV['SYNC_ALTER2']) == true){
		return $_ENV['ALTER2_URL'];
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