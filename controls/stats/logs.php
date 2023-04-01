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
		$sess = $_SESSION['sess_id'];
		$log = "INSERT INTO page_visit VALUES (DEFAULT, '$user', '$page', '$sess',  DEFAULT, DEFAULT)";
		mysqli_query(conn(), $log);
	}

	public static function log_live_time(){
		LogsController::log_page_visit();
		$user = $_SESSION['id'];
		$page = $_POST['uri'] == '/' ? 'home' : substr($_POST['uri'], 1);
		$sess = $_SESSION['sess_id'];
		$duration = 2900;
		db()->query("UPDATE page_visit SET live = live+? WHERE uri = ? AND visitor = ? AND identifier = ?", $duration, $page, $user, $sess);
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

	public static function log_video_activity(){
		$activity = mysqli_real_escape_string(conn(), $_POST['action']);
		$users_id = mysqli_real_escape_string(conn(), $_POST['user_id']);
		$video_id = mysqli_real_escape_string(conn(), $_POST['video_id']);

		switch($activity){
			case 'save'	:
				$log = "INSERT INTO video_activity VALUES (DEFAULT, '$users_id', '$video_id', 1, DEFAULT)";
				if(mysqli_query(conn(), $log)){ echo 'video added to your bookmark list'; }
				else{echo 'You have already bookmarked this video';} break;
			case 'dsave' : 
				$log = "DELETE FROM video_activity WHERE user_id = '$users_id' AND video_id = '$video_id'";
				if(mysqli_query(conn(), $log)){ echo 'video removed from your bookmark list'; }
				else{echo 'This video was not found in your Bookmarks';} break;
			default:
				echo json_encode(array('status' => 'error'));
		}
	}

	public static function log_doc_visit($id){
		$page = '';
		$user = $_SESSION['id'];
		$sess = $_SESSION['sess_id'];
		$log = "INSERT INTO doc_views VALUES (DEFAULT, '$id', '$user', '$sess', '$page', DEFAULT)";
		mysqli_query(conn(), $log);
	}

	public static function log_log_activity(){
		$user	= $_SESSION['id'];
		$sess	= $_COOKIE['PHPSESSID'].$_SESSION['identifier'];
		$sql	= "INSERT INTO log_activity VALUES (DEFAULT, '$user', '$sess', DEFAULT)";
		mysqli_query(conn(), $sql);
		$_SESSION['sess_id'] = $sess;
	}
}
?>