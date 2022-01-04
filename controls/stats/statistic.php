<?php
class StatsController{
	// counts the number of video views
	public static function get_video_view($id){
		$sql = "SELECT count(id) as views FROM video_views";
		$sql = mysqli_query(conn(), $sql);
		$video = mysqli_fetch_assoc($sql);

		return $video['views'];
	}

	// counts the number of users
	public static function count_user(){
		$sql = "SELECT count(id) as users FROM users";
		$sql = mysqli_fetch_assoc(mysqli_query(conn(), $sql));
		
		return $sql['users'];
	}

	// counts the number of videos
	public static function count_video(){
		$sql = "SELECT count(id) as videos FROM video";
		$sql = mysqli_fetch_assoc(mysqli_query(conn(), $sql));
		
		return $sql['videos'];
	}

	// counts the number of documents
	public static function count_document(){
		$sql = "SELECT count(id) as docs FROM document";
		$sql = mysqli_fetch_assoc(mysqli_query(conn(), $sql));
		
		return $sql['docs'];
	}

	// counts the number of intergreated systems
	public static function count_apps(){
		$sql = "SELECT count(id) as apps FROM apps";
		$sql = mysqli_fetch_assoc(mysqli_query(conn(), $sql));
		
		return $sql['apps'];
	}

	// counts the number of users who have visited the site
	public static function count_page_visits(){
		$uri = substr($_SERVER['REQUEST_URI'], 1);
		$sql = "SELECT COUNT(uri) AS all_time, 
				(SELECT COUNT(uri) FROM page_visit WHERE uri='$uri' AND MONTH(TIME) = MONTH(CURRENT_TIMESTAMP)) AS monthly,
				(SELECT COUNT(uri) FROM page_visit WHERE URI='$uri' AND DATE(TIME) = DATE(CURRENT_TIMESTAMP)) AS today
			FROM page_visit WHERE URI='$uri'";

		return mysqli_fetch_assoc(mysqli_query(conn(), $sql));
	}

	// counts the number of views for a specific video
	public static function count_video_view(){
		$sql = "SELECT COUNT(id) AS all_time, 
			(SELECT COUNT(id) FROM video_views WHERE MONTH(TIME) = MONTH(CURRENT_TIMESTAMP)) AS monthly,
			(SELECT COUNT(id) FROM video_views WHERE DATE(TIME) = DATE(CURRENT_TIMESTAMP)) AS today
		FROM video_views";
		return mysqli_fetch_assoc(mysqli_query(conn(), $sql));
	}

	public static function count_popular_view(){
		$sql = "SELECT video_id, COUNT(id) as total FROM video_views GROUP BY video_id ORDER BY COUNT(id) DESC LIMIT 50";
		return mysqli_fetch_all(mysqli_query(conn(), $sql), MYSQLI_ASSOC);
	}

	public static function count_obscured_view(){
		$sql = "SELECT video_id, COUNT(id) as total FROM video_views GROUP BY video_id ORDER BY COUNT(id) ASC LIMIT 50";
		return mysqli_fetch_all(mysqli_query(conn(), $sql), MYSQLI_ASSOC);
	}

	// counts the number of users who visited the intergrated system (apps)
	public static function count_app_visits(){
		$sql = "SELECT COUNT(id) AS all_time, 
			(SELECT COUNT(id) FROM app_visits WHERE MONTH(TIME) = MONTH(CURRENT_TIMESTAMP)) AS monthly,
			(SELECT COUNT(id) FROM app_visits WHERE DATE(TIME) = DATE(CURRENT_TIMESTAMP)) AS today
		FROM app_visits";
		return mysqli_fetch_assoc(mysqli_query(conn(), $sql));
	}

	/* visualize specific users activity
	public static function count_user_activity(){
		$sql = "SELECT user, COUNT(id) as total FROM log_activity GROUP BY user ORDER BY COUNT(id) DESC LIMIT 50";
		return mysqli_fetch_all(mysqli_query(conn(), $sql), MYSQLI_ASSOC);
	}*/

	//visualize general user activity
	public static function count_users_activity(){
		//$sql = "SELECT MONTH(created), COUNT(id) as logs FROM log_activity WHERE YEAR(created)=YEAR(NOW()) GROUP BY MONTH(created) ORDER BY MONTH(created)";
		//return mysqli_fetch_all(mysqli_query(conn(), $sql), MYSQLI_ASSOC);
		for($i=1; $i<=12; $i++){
			$sql = "SELECT COUNT(id) as logs FROM log_activity WHERE MONTH(created) = $i AND YEAR(created)=YEAR(NOW())";
			$sql = mysqli_fetch_assoc(mysqli_query(conn(), $sql));
			$data[] = $sql['logs'];
		}

		return $data;
	}


}
?>