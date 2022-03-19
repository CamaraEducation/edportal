<?php
class PortalUpdate{
 	public static function init(){
		$version = Portal::fetch('last');
		$current = file_get_contents("portal.json");
		while($version != $current){

			switch($version){
				case '0,0,0':
					$sql = "CREATE TABLE `sync` (
						`id` INT NOT NULL,
						`site` BIGINT NOT NULL DEFAULT 0,
						`app` BIGINT NOT NULL DEFAULT 0,
						`vid` BIGINT NOT NULL DEFAULT 0,
						`doc` BIGINT NOT NULL DEFAULT 0,
						`last` DATETIME NOT NULL DEFAULT now() ON UPDATE now(),
						PRIMARY KEY (`id`)
					)
					COLLATE='latin1_swedish_ci'";

					if(mysqli_query(conn(), $sql)){ echo "<b>SUCCESS:</b> The data sync table has been succesfully created</b><br>";
						}else{ echo "<b style='color:brown'>FAILED:</b> The data sync table could not be created</b><br>";
					}


					$sql = "ALTER TABLE `subjects`
					ADD COLUMN `thumb` VARCHAR(50) NULL DEFAULT '/upload/subject/thumb/def.jpg' AFTER `name`,
					ADD COLUMN `cover` VARCHAR(50) NULL DEFAULT '/upload/subject/cover/def.png' AFTER `thumb`";

					if(mysqli_query(conn(), $sql)){ echo "<b>SUCCESS:</b> Table subject was succesfully updated</b><br>";
						}else{ echo "<b style='color:brown'>FAILED:</b> Could not update table subject</b><br>";
					}
					break;

				case '121':
					$sql = "UPDATE config SET last='122'";
					if(mysqli_query(conn(), $sql)){ echo "<b>SUCCESS:</b> CUpdated to Version 1.2.2</b><br>";
						}else{ echo "<b style='color:brown'>FAILED:</b> Update to version 1.2.2 Failed</b><br>";
					}
					break;
				default:
					echo "THE UPDATE IS COMPLETE";
			}
		}
 	}
}
?>
