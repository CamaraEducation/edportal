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

		$sql[5] = "CREATE TABLE IF NOT EXISTS `manic_jobs` (
			`id` INT(11) NOT NULL AUTO_INCREMENT,
			`files` TEXT NOT NULL COLLATE 'latin1_swedish_ci',
			`status` CHAR(50) NOT NULL DEFAULT '' COLLATE 'latin1_swedish_ci',
			PRIMARY KEY (`id`) USING BTREE
		) COLLATE='latin1_swedish_ci'";

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
			]
		];

		# alter uptime to bigint from varchar
		$nms[0] = "ALTER TABLE `process` CHANGE COLUMN `user_time` `user_time` BIGINT NOT NULL DEFAULT 0 COLLATE 'utf8_unicode_ci' AFTER `up_time`";

		# create process view in ccnms
		$nms[1] = "CREATE OR REPLACE VIEW process_sum AS(
			SELECT id, host_name, name,
				CAST( SUBSTRING(FROM_UNIXTIME(substring(start_time, 1, 10)), 1, 19) AS DATETIME) AS started,
				MAX(user_time) AS uptime
			FROM `process` 
			WHERE 
				`name` NOT IN ('0install', '0install-win', 'snapd', 'systemd-udevd', 'svchost', 'xorg', 'sppsvc', 'mscorsvw', 'mysqld') AND
				host_name != 'camara2004' AND
				user_time>1000
			GROUP by start_time, name, host_name
			ORDER BY id ASC
		)";

		$nms[3] = "CREATE OR REPLACE VIEW pc_usage AS (
			SELECT id, host_name, CAST(booted AS DATETIME) AS booted, MAX(TIME_TO_SEC(SUBSTRING_INDEX(uptime, ' ' , '-1'))) AS uptime 
			FROM os_info
			WHERE host_name != 'camara2004'
			GROUP BY host_name, CAST(booted AS DATETIME)
			ORDER BY id ASC
		)";

		$nms[4] = "CREATE TABLE IF NOT EXISTS `sync` (
			`id` INT NOT NULL AUTO_INCREMENT,
			`usage` BIGINT NOT NULL DEFAULT 0,
			`process` BIGINT NOT NULL DEFAULT 0,
			PRIMARY KEY (`id`)
		) COLLATE='latin1_swedish_ci'";

		#applying portal queries
		foreach($sql as $query):
			if(mysqli_query(conn(), $query)):
				echo $res[$no]['success'].'<br>';
			else:
				echo $res[$no]['error'] . '<br>';
			endif; $no++;
		endforeach;

		# applying nms queries
		foreach($nms as $query):
			if(mysqli_query(ccnms(), $query)):
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
		if(ConfigsController::get('last') == 200):
			exec('sudo unzip -o /www/wwwroot/default/upload/dropbox/manic.zip -d /www/wwwroot/');
			echo '<b class="text-success">SUCCESS: </b>Manic syncronization files updated successfully'.PHP_EOL;

			$directory = '/www/wwwroot/manic/data/jobs';

			# log existing job_files to manic_jobs table
			if(is_dir($directory)) {
				$scan = scandir($directory);
				unset($scan[0], $scan[1]); //unset . and ..
				foreach($scan as $file) {
					if(strpos($file, '.json') !== false) {
						//db()->query("INSERT INTO manic_jobs VALUES (DEFAULT, '$file', 'pending')");
						echo "INSERT INTO manic_jobs VALUES (DEFAULT, '$file', 'pending')".PHP_EOL;
					}
					else {
						echo "no file detected".PHP_EOL;
					}
				}
			}

			//db()->query("UPDATE config set `last` = ? where id = 1", '201');


		endif;

		
		echo "system version is now 2.2.0";
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
