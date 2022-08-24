<?php
class PortalUpdate{
 	public static function init(){
		echo "system version is now 1.5.2";
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
