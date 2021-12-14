<?php
class LogsController{
	public static function log_video_view($id){
		$user = $_SESSION['id'];
		$log = "INSERT INTO video_views (video_id, user_id) VALUES ('$id', '$user')";
		mysqli_query(conn(), $log);
	}

	public static function log_page_visit(){
		$page = $_SERVER['REQUEST_URI'] == '/' ? 'home' : substr($_SERVER['REQUEST_URI'], 1);
		$user = $_SESSION['id'];
		$log = "INSERT INTO page_visit VALUES (DEFAULT, '$user', '$page', DEFAULT, DEFAULT)";
		mysqli_query(conn(), $log);
	}

	public static function log_live_time(){
		LogsController::log_page_visit();
		$user = $_SESSION['id'];
		$page = $_SERVER['REQUEST_URI'] == '/' ? 'home' : substr($_SERVER['REQUEST_URI'], 1);
		$duration = $_POST['duration'];
		$sql= "UPDATE page_visit SET live = '$duration' WHERE uri = '$page' AND visitor = '$user' AND date(time) = date(CURRENT_TIMESTAMP)";
		mysqli_query(conn(), $sql);
	}

	public static function log_app_visit(){
		$user   = mysqli_real_escape_string(conn(), $_POST['user_id']);
		$app    = mysqli_real_escape_string(conn(), $_POST['app_id']);
		$page   = mysqli_real_escape_string(conn(), $_POST['uri']);

		$log = "INSERT INTO app_visits VALUES (DEFAULT, '$app', '$user', '$page', DEFAULT)";
		if(mysqli_query(conn(), $log)){
			echo json_encode(array('status' => 'success'));
		}else{
			echo json_encode(array('status' => 'error'));
		}
	}
}
?>