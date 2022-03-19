<?php
class VideosControl{
	public static function get($id){
		$sql = "SELECT *, TIMEDIFF(CURRENT_TIMESTAMP, created) AS span FROM video WHERE id = '$id'";
		$sql = mysqli_query(conn(), $sql);

		return mysqli_fetch_assoc($sql);
	}

	public static function fetch($category){
		$sql = "SELECT *, TIMEDIFF(CURRENT_TIMESTAMP, created) AS span FROM video WHERE category = '$category' ORDER BY id DESC";
		$sql = mysqli_query(conn(), $sql);

		return mysqli_fetch_all($sql, MYSQLI_ASSOC);
	}
	

	public static function create(){
		$title	  = mysqli_real_escape_string(conn(), $_POST['title']);
		$category = mysqli_real_escape_string(conn(), $_POST['category']);
		$class 	  = mysqli_real_escape_string(conn(), $_POST['class']);
		$tags 	  = mysqli_real_escape_string(conn(), $_POST['tags']);
		$description = mysqli_real_escape_string(conn(), $_POST['description']);

		$banner = '/' . FileUploader::upload($file = 'thumbnail', $dir = 'video/cover/');
		$video  = '/' . FileUploader::upload($file = 'video', $dir = 'video/source/' );

		$sql = "INSERT INTO video (title, description, thumbnail, source, class, category, tags) VALUES ('$title', '$description', '$banner', '$video', '$class', '$category', '$tags')";
		if(mysqli_query(conn(), $sql)){
			header('Location: /video');
		}else{
		   echo 'something wrong';
		}
	}

	public static function views($id){
		$sql = "SELECT count(id) as views FROM video_views WHERE video_id = '$id'";
		$sql = mysqli_query(conn(), $sql);
		$video = mysqli_fetch_assoc($sql);

		return $video['views'];
	}

	public static function popular(){
		$popular = StatsController::count_popular_view(); $no = 0;
		foreach($popular as $video){
			$id = $video['video_id'];
			$sql = "select title, thumbnail from video where id = '$id'";
			$pop[$no] = mysqli_fetch_assoc(mysqli_query(conn(), $sql));
			$pop[$no]['views'] = $video['total'];  $no++;
		}
		return $pop;
	}

	public static function obscured(){
		$obscured = StatsController::count_obscured_view(); $no = 0;
		foreach($obscured as $video){
			$id = $video['video_id'];
			$sql = "select title, thumbnail from video where id = '$id'";
			$obs[$no] = mysqli_fetch_assoc(mysqli_query(conn(), $sql));
			$obs[$no]['views'] = $video['total'];  $no++;
		}
		return $obs;
	}

	public static function video_activity($id){
		$sql = "SELECT COUNT(id) as bookmark FROM  video_activity where bookmark = 1 AND video_id = '$id'";
		$sql = mysqli_fetch_assoc(mysqli_query(conn(), $sql));

		return $sql['bookmark'];
	}

	public static function video_bookmark($id){
		$user = $_SESSION['id'];
		$sql = "SELECT COUNT(id) as bookmark FROM  video_activity where bookmark = 1 AND video_id = '$id' AND user_id = '$user'";
		$sql = mysqli_fetch_assoc(mysqli_query(conn(), $sql));

		return $sql['bookmark'];
	}
}
?>