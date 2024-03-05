<?php

session_start();
include 'vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__, '.env')->load();

$whoops = new Whoops\Run();
$errorPage = new Whoops\Handler\PrettyPageHandler();

$whoops->pushHandler($errorPage)->register();


/*****************************************************
 *               ALL ROUTES INITIATOR                *	
 *       APPLICATION ENVIRONMENTS AND CONSTANTS      *
 *****************************************************/

use duncan3dc\Laravel\Blade;

include 'core/Route.php';
include 'core/Loader.php';
define('upload', 'upload/');

ConfigsController::check();


/*****************************************************
 *     IF YOU NEED TO ADD ANYTHING IT SHOULD BE      *
 *                  FROM DOWN HERE                   *
 *****************************************************/

# config Loader
define('country', ConfigsController::get('country'));

// Define views global paths
Blade::addPath(getcwd().'/views/auth');
Blade::addPath(getcwd().'/views/errors');
Blade::addPath(getcwd().'/views/public');
Blade::addPath(getcwd().'/views/admin');

load_dir_files('routes');

Route::pathNotFound(function($path) {
	header('HTTP/1.0 404 Not Found');
	echo Blade::render("404", ['path' => $path]);
});

Route::methodNotAllowed(function($path, $method) {
	header('HTTP/1.0 405 Method Not Allowed');
	echo Blade::render("405", ['method' => $method]);
});

// Run the Router with the given Basepath
Route::run();

// Enable case sensitive mode, trailing slashes and multi match mode by setting the params to true
// Route::run(BASEPATH, true, true, true);