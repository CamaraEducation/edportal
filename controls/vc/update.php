<?php
class PortalUpdate{
 	public static function init(){ 
		
		try {

			LegacyChanges::init();
			Changes::init();

			echo "Update Success: Edportal Version" .ConfigsController::get('last') .PHP_EOL;

		} catch (\Throwable $th) {
			
			echo "Update Failure: ".$th->getMessage().PHP_EOL;

		}
		
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
