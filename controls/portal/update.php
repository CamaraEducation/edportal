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

		$res[0] = ['success' => 'Table dropbox created successfully', 'error' => 'Error creating table dropbox: '];

		foreach($sql as $query):
			if(mysqli_query(conn(), $query)):
				echo $res[$no]['success'].PHP_EOL;
			else:
				echo $res[$no]['error'] . mysqli_error(conn()).PHP_EOL;
			endif; $no++;
		endforeach;

		echo "system version is now 1.5.3";
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
