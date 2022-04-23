<?php
class NMSController{
	function conn(){
		$servername = 'localhost';
		$username   = 'root';
		$password   = '';
		$database   = 'ccnms';

		$conn = new mysqli($servername, $username, $password, $database);
		return $conn;
	}

	public static function check(){
		$count = self::count();
		$macs  = self::macs();

		return ['count'=>$count, 'macs'=>$macs];
	}

	public static function count(){
		$conn = self::conn();
		$query = "SELECT COUNT(DISTINCT(mac_add)) as num FROM network_interface";
		$query = mysqli_query($conn, $query);
		$query = mysqli_fetch_assoc($query);
		return $query['num'];
	}

	public static function macs(){
		$conn = self::conn();
		$query = "SELECT DISTINCT(mac_add) FROM network_interface";
		$query = mysqli_fetch_all(mysqli_query($conn, $query), MYSQLI_ASSOC);
		return $query;
	}
}
?>