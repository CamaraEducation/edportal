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
			echo(shell_exec('git stash'));
			shell_exec('git pull origin main');
		}else{

			// copy store a backup of config.log
            exec("sudo cp -f /www/wwwroot/default/manic/config.log /www/wwwroot/");

			// stash and pull from git
			echo(shell_exec('sudo git stash'));
			echo(shell_exec('sudo git pull origin main'));

			// restore config.log			
            exec('sudo chmod -R 777 /www/wwwroot/default/manic');
			exec("sudo cp -f /www/wwwroot/config.log /www/wwwroot/default/manic/");
		}
	}

	public static function version($version){
		db()->query("UPDATE config set `last` = ? where id = 1", $version);
	}
}
?>
