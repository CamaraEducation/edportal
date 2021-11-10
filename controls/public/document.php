<?php
class DocsControl{
    public static function get($id){
		$sql = "SELECT *, TIMEDIFF(CURRENT_TIMESTAMP, created) AS span FROM document WHERE id = '$id'";
		$sql = mysqli_query(conn(), $sql);

		return mysqli_fetch_assoc($sql);
	}

	public static function fetch(){
		$sql = "SELECT *, TIMEDIFF(CURRENT_TIMESTAMP, created) AS span FROM document ORDER BY id DESC";
		$sql = mysqli_query(conn(), $sql);

		return mysqli_fetch_all($sql, MYSQLI_ASSOC);
	}

	public static function create(){
		$title	  = mysqli_real_escape_string(conn(), $_POST['title']);
		$category = mysqli_real_escape_string(conn(), $_POST['category']);
		$author	  = mysqli_real_escape_string(conn(), $_POST['author']);
		$type	  = mysqli_real_escape_string(conn(), $_POST['type']);
		$description = mysqli_real_escape_string(conn(), $_POST['description']);

		$banner = '/' . FileUploader::upload($file = 'thumbnail', $dir = 'docs/cover/');
		$doc	= '/' . FileUploader::upload($file = 'document', $dir = 'docs/source/' );

		$sql = "INSERT INTO document (name, description, thumbnail, source, publisher, category, type) VALUES ('$title', '$description', '$banner', '$doc', '$author', '$category', '$type')";
		if(mysqli_query(conn(), $sql)){
			header('Location: /document');
		}else{
		   echo 'something wrong';
		}
	}

	public static function views($id){
		$sql = "SELECT count(id) as views FROM doc_views WHERE doc_id = '$id'";
		$sql = mysqli_query(conn(), $sql);
		$doc = mysqli_fetch_assoc($sql);

		return $doc['views'];
	}
}
?>