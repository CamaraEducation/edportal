<?php
function load_classphp($directory) {
	if(is_dir($directory)) {
		$scan = scandir($directory);
		unset($scan[0], $scan[1]); //unset . and ..
		foreach($scan as $file) {
			if(is_dir($directory."/".$file)) {
				load_classphp($directory."/".$file);
			} else {
				if(strpos($file, '.php') !== false) {
					require_once($directory."/".$file);
				}
			}
		}
	}
}

function config($conf){
	if($conf = 'all'){
		$env = $_ENV;
	}else{ $env = $_ENV[strtoupper($conf)]; }
	return $env;
}

require_once 'Configuration.php';
require_once 'Notices.php';
load_classphp('controls');
?>