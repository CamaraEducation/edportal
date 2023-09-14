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

		# manic time data tables - pc_apps, pc_usage, pc_docs

		$sql[5] = "CREATE TABLE IF NOT EXISTS `manic_records` (
			`id` INT(11) NOT NULL AUTO_INCREMENT,
			`last` JSON NOT NULL,
			PRIMARY KEY (`id`) USING BTREE
		)
		COLLATE='latin1_swedish_ci'
		ENGINE=InnoDB";

		/* Version 2.0.2 */
		$sql[6] = "CREATE TABLE IF NOT EXISTS `manic_usage` (
			`id` INT(11) NOT NULL AUTO_INCREMENT,
			`DeviceName` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
			`Name` TEXT NOT NULL COLLATE 'latin1_swedish_ci',
			`StartLocalTime` DATETIME NOT NULL,
			`EndLocalTime` DATETIME NOT NULL,
			`Duration` DOUBLE NOT NULL DEFAULT '0',
			PRIMARY KEY (`id`) USING BTREE
		)
		COLLATE='latin1_swedish_ci'
		ENGINE=InnoDB;";
		
		$sql[7] = "CREATE TABLE IF NOT EXISTS `manic_apps` (
			`id` INT(11) NOT NULL AUTO_INCREMENT,
			`DeviceName` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
			`Name` TEXT NOT NULL COLLATE 'latin1_swedish_ci',
			`StartLocalTime` DATETIME NOT NULL,
			`EndLocalTime` DATETIME NOT NULL,
			`Duration` DOUBLE NOT NULL DEFAULT '0',
			PRIMARY KEY (`id`) USING BTREE
		)
		COLLATE='latin1_swedish_ci'
		ENGINE=InnoDB;";
		
		$sql[8] = "CREATE TABLE IF NOT EXISTS `manic_docs` (
			`id` INT(11) NOT NULL AUTO_INCREMENT,
			`DeviceName` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
			`Name` TEXT NOT NULL COLLATE 'latin1_swedish_ci',
			`StartLocalTime` DATETIME NOT NULL,
			`EndLocalTime` DATETIME NOT NULL,
			`Duration` DOUBLE NOT NULL DEFAULT '0',
			PRIMARY KEY (`id`) USING BTREE
		)
		COLLATE='latin1_swedish_ci'
		ENGINE=InnoDB;";



		$res = [
			0 => [
				'success' => '<b class="text-success">SUCCESS: </b>Table dropbox created successfully'.PHP_EOL,
				'error'	=> '<b class="text-danger">FAILED: </b>Error creating table dropbox: '
			],
			1 => [
				'success' => '<b class="text-success">SUCCESS: </b>Table course created successfully'.PHP_EOL, 
				'error' => '<b class="text-danger">FAILED: </b>Error creating table course: '
			],
			2 => [
				'success' => '<b class="text-success">SUCCESS: </b>Amharic Language icon updated successfully'.PHP_EOL,
				'error' => '<b class="text-danger">FAILED: </b>Error updating subject Amharic Language icon: '
			],
			3 => [
				'success' => '<b class="text-success">SUCCESS: </b>French Language icon updated successfully'.PHP_EOL, 
				'error' => '<b class="text-danger">FAILED: </b>Error updating subject French Language icon: '
			],
			4 => [
				'success' => '<b class="text-success">SUCCESS: </b>Computer Studies icon updated successfully'.PHP_EOL, 
				'error' => '<b class="text-danger">FAILED: </b>Error updating subject Computer Studies icon: '
			],
			5 => [
				'success' => '<b class="text-success">SUCCESS: </b>Table Manic Jobs created successfully'.PHP_EOL, 
				'error' => '<b class="text-danger">FAILED: </b>Error creating table Manic Jobs: '
			],
			6 => [
				'success' => '<b class="text-success">SUCCESS: </b>Table Manic Usage created successfully'.PHP_EOL, 
				'error' => '<b class="text-danger">FAILED: </b>Error creating table Manic Usage: '
			],
			7 => [
				'success' => '<b class="text-success">SUCCESS: </b>Table Manic Apps created successfully'.PHP_EOL, 
				'error' => '<b class="text-danger">FAILED: </b>Error creating table Manic Apps: '
			],
			8 => [
				'success' => '<b class="text-success">SUCCESS: </b>Table Manic Docs created successfully'.PHP_EOL, 
				'error' => '<b class="text-danger">FAILED: </b>Error creating table Manic Docs: '
			],
		];

		#applying portal queries
		foreach($sql as $query):
			if(mysqli_query(conn(), $query)):
				echo $res[$no]['success'].'<br>';
			else:
				echo $res[$no]['error'] . '<br>';
			endif; $no++;
		endforeach;

		/****************************************************************************
		 *							ENVIRONMENTAL VARIABLES							*
		 ****************************************************************************/

		# Fech existing variables
		$data = '';
		foreach($_ENV as $key => $value){
			$data .= $key. " = '". $value."'". PHP_EOL;
		}

		# check sync servers
		if(!isset($_ENV['SYNC_ALTER0'])){
			$url = 'https://dashboard.camara.org/sc/sync';
			$data .= "DB_DSN = 'mysql:host=localhost;dbname=portal'".PHP_EOL;
			$data .= "SYNC_ALTER0 = '$url'".PHP_EOL;
			$data .= "SYNC_ALTER1 = '$url'".PHP_EOL;
			$data .= "SYNC_ALTER3 = '$url'".PHP_EOL;
		}

		file_put_contents('.env', $data);


		# rewrite manic syncronization files
		if(ConfigsController::get('last') >= 200 or ConfigsController::get('last') <= 222):
			exec('sudo unzip -o /www/wwwroot/default/upload/dropbox/manic.zip -d /www/wwwroot/');
			echo '<b class="text-success">SUCCESS: </b>Manic syncronization files updated successfully <br>'.PHP_EOL;

			/*$directory = '/www/wwwroot/manic/data/jobs';

			# log existing job_files to manic_jobs table
			if(is_dir($directory)) {
				$scan = scandir($directory);
				unset($scan[0], $scan[1]); //unset . and ..
				foreach($scan as $file) {
					if(strpos($file, '.json') !== false) {
						db()->query("INSERT INTO manic_jobs VALUES (DEFAULT, '$file', 'pending')");
					}
					else {
						echo "no file detected".PHP_EOL;
					}
				}
			} */
			
			db()->query("UPDATE config set `last` = 223 where id = 1");

		endif;

		if(ConfigsController::get('last') == 223):

			db()->query("
				CREATE TABLE IF NOT EXISTS `safeguarding` (
				`id` int(11) NOT NULL AUTO_INCREMENT,
				`title` text NOT NULL,
				`content` text NOT NULL,
				`type` char(50) NOT NULL DEFAULT '',
				`country` char(50) NOT NULL DEFAULT '',
				`updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
				`created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
				PRIMARY KEY (`id`)
				) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
			");

			db()->query("
				DELETE FROM `safeguarding`;
				INSERT INTO `safeguarding` (`id`, `title`, `content`, `type`, `country`, `updated`, `created`) VALUES
					(1, 'Protecting our most vulnerable', '202312090129.txt', 'text', 'all', '2023-09-13 18:20:12', '2023-09-13 13:36:30'),
					(2, 'SCI Safeguarding & Digital Technology Tipsheet', '202312090129.pdf', 'doc', 'all', '2023-09-13 13:33:18', '2023-09-13 13:33:18'),
					(3, 'SCI_Safeguarding & Social Media (Field-Friendly Guidance)_EN', '202312091658.pdf', 'doc', 'all', '2023-09-13 17:01:12', '2023-09-13 17:01:12'),
					(4, 'Let us Talk pants', '202312090139.txt', 'text', 'all', '2023-09-13 18:20:29', '2023-09-13 18:10:52');
			");

			db()->query("UPDATE config set `last` = 224 where id = 1");
		endif;

		
		exec("sudo cp -f /www/wwwroot/config.log /www/wwwroot/default/manic/");
		exec('sudo chmod -R 777 /www/wwwroot/default/manic');
		
		// drop manic jobs table if exists
		db()->query("DROP TABLE IF EXISTS `manic_jobs`");

		
		echo "system version is now 2.2.4";
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
