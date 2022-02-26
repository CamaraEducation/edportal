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
function is_connected(){
	$connected = @fsockopen("www.example.com", 80); 
	if ($connected){ $is_conn = true;  fclose($connected);
		}else{ $is_conn = false; //action in connection failure
	}

	return $is_conn;
}

function get_user_role($id){
	switch($id){
		case 1: return 'Administrator';	break;
		case 2: return 'Teacher';		break;
		default: return 'Student'; 
	}
}

?>