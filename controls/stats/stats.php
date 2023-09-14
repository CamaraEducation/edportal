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
			(SELECT COUNT(id) FROM app_visits WHERE MONTH('time') = MONTH(CURRENT_TIMESTAMP)) AS monthly,
			(SELECT COUNT(id) FROM app_visits WHERE DATE('time') = DATE(CURRENT_TIMESTAMP)) AS today
		FROM app_visits";
		return mysqli_fetch_assoc(mysqli_query(conn(), $sql));
	}
	
	public static function count_app_visit($id){
	    $sql = "SELECT COUNT(id) AS all_time, 
			(SELECT COUNT(id) FROM app_visits WHERE app='$id' AND MONTH(`time`) = MONTH(CURRENT_TIMESTAMP)) AS monthly,
			(SELECT COUNT(id) FROM app_visits WHERE app='$id' AND DATE(`time`) = DATE(CURRENT_TIMESTAMP)) AS today
		FROM app_visits WHERE app='$id'";
		return mysqli_fetch_assoc(mysqli_query(conn(), $sql));
	}

	public static function count_doc_view(){
		$sql = "SELECT COUNT(id) AS all_time, 
			(SELECT COUNT(id) FROM video_views WHERE MONTH(`time`) = MONTH(CURRENT_TIMESTAMP)) AS monthly,
			(SELECT COUNT(id) FROM video_views WHERE DATE(`time`) = DATE(CURRENT_TIMESTAMP)) AS today
		FROM video_views";
		return mysqli_fetch_assoc(mysqli_query(conn(), $sql));
	}


	public static function popular_docs(){
		$sql = "SELECT doc_id, COUNT(id) as total FROM doc_views GROUP BY doc_id ORDER BY COUNT(id) DESC LIMIT 50";
		return mysqli_fetch_all(mysqli_query(conn(), $sql), MYSQLI_ASSOC);
	}

	public static function ghost_docs(){
		$sql = "SELECT doc_id, COUNT(id) as total FROM doc_views GROUP BY doc_id ORDER BY COUNT(id) ASC LIMIT 50";
		return mysqli_fetch_all(mysqli_query(conn(), $sql), MYSQLI_ASSOC);
	}


	public static function count_user_activity($id){
		for($i=1; $i<=12; $i++){
			$sql = "SELECT COUNT(id) as logs FROM log_activity WHERE MONTH(created) = $i AND YEAR(created)=YEAR(NOW()) AND `user`='$id'";
			$sql = mysqli_fetch_assoc(mysqli_query(conn(), $sql));
			$data[] = $sql['logs'];
		}

		return $data;
	}

	//visualize general user activity
	public static function count_users_activity(){
		for($i=1; $i<=12; $i++){
			$sql = "SELECT COUNT(id) as logs FROM log_activity WHERE MONTH(created) = $i AND YEAR(created)=YEAR(NOW())";
			$sql = mysqli_fetch_assoc(mysqli_query(conn(), $sql));
			$data[] = $sql['logs'];
		}

		return $data;
	}

	// live time graph
	static function sum_users_activity(){
		for($i=1; $i<=12; $i++){
			$sql = "SELECT SUM(live)/3600/1000 as logs FROM page_visit WHERE MONTH(`time`) = $i AND YEAR(`time`)=YEAR(NOW())";
			$sql = mysqli_fetch_assoc(mysqli_query(conn(), $sql));
			$data[] = $sql['logs'];
		}

		return $data;
	}

	public static function count_user_time($id){
		$sql = "SELECT SUM(live) AS all_time, 
				(SELECT SUM(live) FROM page_visit WHERE MONTH(TIME) = MONTH(CURRENT_TIMESTAMP) AND  visitor = '$id') AS monthly,
				(SELECT SUM(live) FROM page_visit WHERE DATE(TIME) = DATE(CURRENT_TIMESTAMP) AND visitor = '$id') AS today
			FROM page_visit WHERE YEAR(TIME) = YEAR(CURRENT_TIMESTAMP) AND `visitor`='$id'";
		return mysqli_fetch_assoc(mysqli_query(conn(), $sql));
	}

	public static function count_live_time(){		
		$sql = "SELECT 
				SUM(CASE WHEN DATE(time) = CURDATE() THEN live ELSE 0 END) AS today,
				SUM(CASE WHEN YEAR(time) = YEAR(CURDATE()) AND MONTH(time) = MONTH(CURDATE()) THEN live ELSE 0 END) AS monthly,
				SUM(CASE WHEN YEAR(time) = YEAR(CURDATE()) THEN live ELSE 0 END) AS all_time
			FROM  page_visit
			WHERE YEAR(time) = YEAR(CURDATE()); ";
		return mysqli_fetch_assoc(mysqli_query(conn(), $sql));
	}

	public static function count_clients(){
		return db()->query("SELECT DeviceName, sum(duration) as 'duration' from manic_usage group by DeviceName");
	}

}
?>
