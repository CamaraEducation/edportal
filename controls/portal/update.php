<?php
class PortalUpdate{
 	public static function init(){
		$sql = 
		"ALTER TABLE `users`
			ADD COLUMN `user_skills` VARCHAR(100) NULL DEFAULT NULL AFTER `user_token`,
			ADD COLUMN `user_interest` VARCHAR(100) NULL DEFAULT NULL AFTER `user_skills`,
			ADD COLUMN `user_lang` VARCHAR(100) NULL DEFAULT NULL AFTER `user_interest`,
			ADD COLUMN `user_class` VARCHAR(100) NULL DEFAULT NULL AFTER `user_lang`,
			ADD COLUMN `user_age` VARCHAR(100) NULL DEFAULT NULL AFTER `user_class`;
		";

		if(mysqli_query(conn(), $sql)){echo "<b>SUCCESS:</b> Users' Table has been succesfully altered<br>";
			}else{echo "<b style='color:brown'>FAILED:</b> Could not alter Users' Table<br>";
		}

		$sql = "DROP TABLE IF EXISTS userdata";
		if(mysqli_query(conn(), $sql)){
			echo "<b>SUCCESS:</b> Userdata Table has been succesfully dropped<br>";
			}else{echo "<b style='color:brown'>FAILED:</b> Could not drop Userdata Table<br>";
		}

		echo "THE UPDATE IS COMPLETE";
 	}
}
?>
