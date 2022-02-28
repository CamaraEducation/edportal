<?php
class PortalUpdate{
 	public static function init(){
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

		if(mysqli_query(conn(), $sql)){ echo "<b>SUCCESS:</b> The data sync table has been succesfully created";
			}else{ echo "<b style='color:brown'>FAILED:</b> The data sync table has been succesfully created";
		}


		$sql = "ALTER TABLE `subjects`
		ADD COLUMN `thumb` VARCHAR(50) NULL DEFAULT '/upload/subject/thumb/def.jpg' AFTER `name`,
		ADD COLUMN `cover` VARCHAR(50) NULL DEFAULT '/upload/subject/cover/def.png' AFTER `thumb`";

		if(mysqli_query(conn(), $sql)){ echo "<b>SUCCESS:</b> Table subject was succesfully updated";
			}else{ echo "<b style='color:brown'>FAILED:</b> Could not update table subject";
		}
		
		echo "THE UPDATE IS COMPLETE";
 	}
}
?>
