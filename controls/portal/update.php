<?php
class PortalUpdate{
 	public static function init(){ 
		$no = 0;
		// create dropbox Table
		$sql[0] = "CREATE TABLE IF NOT EXISTS `dropbox` (
			`id` int(11) NOT NULL AUTO_INCREMENT,
			`name` varchar(30) NOT NULL,
			`description` text NOT NULL,
			`path` text NOT NULL,
			`type` varchar(10) NOT NULL,
			`created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
			PRIMARY KEY (`id`)
		   ) ENGINE=InnoDB DEFAULT CHARSET=utf8";

		# create course table
		$sql[1] = "CREATE TABLE IF NOT EXISTS `course` (
			`id` INT NOT NULL AUTO_INCREMENT,
			`uid` INT NOT NULL,
			`title` TEXT NOT NULL,
			`desc` TEXT NOT NULL,
			`cid` INT NOT NULL DEFAULT 0,
			`sid` INT NOT NULL DEFAULT 0,
			`cover` TEXT NOT NULL,
			`created` DATETIME NOT NULL DEFAULT now(),
			PRIMARY KEY (`id`)
		) COLLATE='latin1_swedish_ci'";

		# update subject icons
		$sql[2] = "UPDATE `subjects` SET `thumb` = '/upload/subject/thumb/et.png' WHERE `name` = 'Amharic Language'";
		$sql[3] = "UPDATE `subjects` SET `thumb` = '/upload/subject/thumb/fr.png' WHERE `name` = 'French Language'";
		$sql[4] = "UPDATE `subjects` SET `thumb` = '/upload/subject/thumb/cs.png' WHERE `name` = 'Computer Studies'";


		$res = [
			0 => ['success' => 'Table dropbox created successfully', 'error' => 'Error creating table dropbox: '],
			1 => ['success' => 'Table course created successfully', 'error' => 'Error creating table course: '],
			2 => ['success' => 'Amharic Language icon updated successfully', 'error' => 'Error updating subject Amharic Language icon: '],
			3 => ['success' => 'French Language icon updated successfully', 'error' => 'Error updating subject French Language icon: '],
			4 => ['success' => 'Computer Studies icon updated successfully', 'error' => 'Error updating subject Computer Studies icon: '],
		];

		foreach($sql as $query):
			if(mysqli_query(conn(), $query)):
				echo $res[$no]['success'].'<br>';
			else:
				echo $res[$no]['error'] . mysqli_error(conn()).'<br>';
			endif; $no++;
		endforeach;

		# check sync servers
		if(!isset($_ENV['SYNC_ALTER0'])){
			# get contents from .env
			$data = ''; $url = 'https://dashboard.camara.org/sc/sync';
			foreach($_ENV as $key => $value){
				$data .= $key. ' = '. $value. PHP_EOL;
			}
	
			$data .= "SYNC_ALTER0 = $url".PHP_EOL."SYNC_ALTER1 = $url".PHP_EOL."SYNC_ALTER3 = $url";
			#echo $data;
	
			file_put_contents('.env', $data);
		}

		# Check dns records, master and master key
		if(!isset($_ENV['MASTER'])){
			# get contents from .env
			$data = '';
			foreach($_ENV as $key => $value){
				$data .= $key. ' = '. $value. PHP_EOL;
			}
	
			$data .= "MASTER = cG9ydGFscm9vdA== ".PHP_EOL."MASTER_KEY = ";
			#echo $data;
	
			file_put_contents('.env', $data);
		}

		
		echo "system version is now 2.0.0";
 	}

	public static function auto(){
		if(PHP_OS_FAMILY == 'Windows'){ 
			shell_exec('git stash');
			shell_exec('git pull origin main');
		}else{
			shell_exec('sudo git stash');
			shell_exec('sudo git pull origin main');
		}
	}
}
?>
