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
		$author = $_SESSION['id'];

		$banner = '/' . FileUploader::upload($file = 'thumbnail', $dir = 'video/cover/');
		$video  = '/' . FileUploader::upload($file = 'video', $dir = 'video/source/' );

		$sql = "INSERT INTO video
			(title, description, thumbnail, source, class, category, tags, author) VALUES
			('$title', '$description', '$banner', '$video', '$class', '$category', '$tags', '$author')";
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

	public static function delete($id){
		$sql = "DELETE FROM video WHERE id = '$id'";
		if(mysqli_query(conn(), $sql)){
			echo 'deleted';
		}else{
		   echo 'something wrong';
		}
	}

	public static function addTimeStamp(){

		header('Content-Type: application/json');

		$videoId = $_POST['videoId'];
		$timeStamps = $_POST['timestamps']; # [...[title: string, time: number, thumbnail: string-b64]]

		// check if video exists
		$video = db()->query("SELECT * FROM video WHERE id = ?", $videoId);
		if(!$video) exit(json_encode(['status' => 'error', 'message' => 'Video not found']));

		// check if timestamps is empty
		if(!is_array($timeStamps) or !count($timeStamps))
			exit(json_encode(['status' => 'error', 'message' => 'No timestamps found']));

		// check if timestamps is valid, remove invalid timestamps
		$validTimeStamps = [];
		foreach($timeStamps as $timeStamp){
			if(!is_array($timeStamp) or !isset($timeStamp['title']) or !isset($timeStamp['time']) or !isset($timeStamp['thumbnail']))
				continue;

			if(strlen($timeStamp['thumbnail']) > 100):
				// extract and save images
				$thumbnail = $timeStamp['thumbnail'];
				$thumbnail = explode(';', $thumbnail)[1];
				$thumbnail = explode(',', $thumbnail)[1];
				$thumbnail = base64_decode($thumbnail);

				$thumbnailPath = 'upload/video/timestamps/' . uniqid() . '.png';
				file_put_contents($thumbnailPath, $thumbnail);

				$thumbnailPath = '/' . $thumbnailPath;
			
				else: $thumbnailPath = $timeStamp['thumbnail'];

			endif;

			// save timestamp
			$validTimeStamps[] = [
				'title' => $timeStamp['title'],
				'time' => $timeStamp['time'],
				'thumbnail' => $thumbnailPath
			];
		}

		// update video with timestamps
		db()->query("UPDATE video SET timestamps = ? WHERE id = ?", json_encode($validTimeStamps), $videoId);		
		echo json_encode(['status' => 'success', 'message'=> 'Timestamps added']);
		

	}
}
?>