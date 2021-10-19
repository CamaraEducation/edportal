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

function theme(){
	setcookie('sidebarBg', 'color_1', time() + (180), "/");
	setcookie('headerPosition', 'fixed', time() + (180), "/");
	setcookie('containerLayout', 'full', time() + (180), "/");
	setcookie('direction', 'ltr', time() + (180), "/");
	setcookie('sidebarPosition', 'fixed', time() + (180), "/");
	setcookie('layout', 'horizontal', time() + (180), "/");
	setcookie('sidebarStyle', 'icon-hover', time() + (180), "/");
	setcookie('primary', 'color_12', time() + (180), "/");
	setcookie('headerBg', 'color_13', time() + (180), "/");
	setcookie('logo_src', 'images/logo-white.png', time() + (180), "/");
	setcookie('navheaderBg', 'color_2', time() + (180), "/");
	setcookie('typography', 'HelveticaNeue', time() + (180), "/");
}

if (!isset($_COOKIE['loaded'])){
	setcookie('loaded', 'true', time() + (86400 * 30), "/");
	header("Refresh:1");	
}

require_once 'Configuration.php';
require_once 'Notices.php';
load_classphp('controls');
theme();
?>