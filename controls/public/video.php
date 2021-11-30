<?php
class VideosControl{
	public static function get($id){
		$sql = "SELECT *, TIMEDIFF(CURRENT_TIMESTAMP, created) AS span FROM video WHERE id = '$id'";
		$sql = mysqli_query(conn(), $sql);

		return mysqli_fetch_assoc($sql);
	}

	public static function fetch(){
		$sql = "SELECT *, TIMEDIFF(CURRENT_TIMESTAMP, created) AS span FROM video ORDER BY id DESC";
		$sql = mysqli_query(conn(), $sql);

		return mysqli_fetch_all($sql, MYSQLI_ASSOC);
	}

	public static function create(){
		$title	  = mysqli_real_escape_string(conn(), $_POST['title']);
		$category = mysqli_real_escape_string(conn(), $_POST['category']);
		$class 	  = mysqli_real_escape_string(conn(), $_POST['class']);
		$description = mysqli_real_escape_string(conn(), $_POST['description']);

		$banner = '/' . FileUploader::upload($file = 'thumbnail', $dir = 'video/cover/');
		$video  = '/' . FileUploader::upload($file = 'video', $dir = 'video/source/' );

		$sql = "INSERT INTO video (title, description, thumbnail, source, class, category) VALUES ('$title', '$description', '$banner', '$video', '$class', '$category')";
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
}
?>