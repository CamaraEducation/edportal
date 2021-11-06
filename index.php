<?php
/*****************************************************
 *     ERROR HANDLER, HANDLES ALL SCRIPT ERRORS      *
 *             EXCEPT SYNTAX ERRORS                  *
 *****************************************************/
session_start();
include 'vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__, '.env');
$dotenv->load();

$whoops = new Whoops\Run();
$errorPage = new Whoops\Handler\PrettyPageHandler();

$errorPage->setPageTitle("500");
$errorPage->setEditor("vscode");
 
$whoops->pushHandler($errorPage);
$whoops->register();


/*****************************************************
 *               ALL ROUTES INITIATOR                *
 *       APPLICATION ENVIRONMENTS AND CONSTANTS      *
 *****************************************************/

use control\Authorize;
use control\Session;
use core\Route;
use duncan3dc\Laravel\Blade;

include 'core/Route.php';
include 'core/Loader.php';


/*****************************************************
 *     IF YOU NEED TO ADD ANYTHING IT SHOULD BE      *
 *                  FROM DOWN HERE                   *
 *****************************************************/

define('BASEPATH', '/');
define('controls',	'controls');
define('app',	    'core');
define('views',		'views');
define('cache', 	'cache');
define('upload',    'upload/');

// Define views global paths
Blade::addPath(views.'/auth');
Blade::addPath(views.'/errors');
Blade::addPath(views.'/public');
Blade::addPath(views.'/admin');
Blade::addPath('core');

/****************************************************
 *              YOU CAN DEFINE YOUR ROUTES          *
 *                  STARTING FROM HERE              *
 ****************************************************/

Route::add('/', function() {
	Session::auth();
	return Blade::render("welcome");
});

/****************************************************
 *                  THE APPS ROUTES       		   	*
 *                STARTING FROM HERE                *
 ****************************************************/

Route::add('/apps', function() {
	echo json_encode(AppsControl::app(1));
});

Route::add('/add/app', function() {
	return Blade::render('admin.apps');
},['get', 'post']);

Route::add('/view/app/([0-9]*)', function($id) {
	return Blade::render('project', ['id' => $id]);
});

Route::add('/create/app', function() {
	AppsControl::create();
}, 'post');


/****************************************************
 *                 THE VIDEO ROUTES       		   	*
 *                STARTING FROM HERE                *
 ****************************************************/
Route::add('/video', function() {
	return Blade::render('video.list');
});

Route::add('/view/video/([0-9]*)/([A-Za-z\-]*)', function($id, $title) {
	return Blade::render('video.view', ['id' => $id, 'title'=> $title]);
});

Route::add('/add/video', function() {
	return Blade::render('video.create');
});

Route::add('/create/video', function() {
	VideosControl::create();
}, 'post');

/****************************************************
 *                 THE USER ROUTES       		   	*
 *                STARTING FROM HERE                *
 ****************************************************/

Route::add('/users', function() {
	return Blade::render('users');
});


/****************************************************
 *                 AUTHENTICATICATION               *
 *             DO NOT CHANGE THIS SECTION           *
 ****************************************************/
Route::add('/authorize/([a-z]*)', function($page) {
	switch ($page){
		case 'register' : Authorize::register(); break;
		case 'login'    : Authorize::login(); break;
		case 'reset'    : break;
		case 'verify'   : break;
		default:
			header('Location: /404');
	}
}, 'post');

Route::add('/login', function() {
	return Blade::render("login");
});

Route::add('/reset', function() {
	return Blade::render("reset");
});

Route::add('/notice/([a-z]*)', function($page) {
	return Blade::render("notice", ['page'=>$page]);
});

/****************************************************
 *                ERROR PAGES 404, 405              *
 *             DO NOT CHANGE THIS SECTION           *
 ****************************************************/

Route::pathNotFound(function($path) {
	echo Blade::render("404", ['path' => $path]);
});

Route::methodNotAllowed(function($path, $method) {
	echo Blade::render("405", ['method' => $method]);
});


/****************************************************
 *      VIEW REGISTERED ROUTES AND THEIR METHODS    *
 *                  USE THIS SECTION                *
 ****************************************************/ 
Route::add('/routes', function() {
	$routes = Route::getAll();
	echo '<ul>';
	foreach ($routes as $route) {
		echo '<li>'.$route['expression'].' ('.$route['method'].')</li>';
	}
	echo '</ul>';
});

// Run the Router with the given Basepath
Route::run(BASEPATH);

// Enable case sensitive mode, trailing slashes and multi match mode by setting the params to true
// Route::run(BASEPATH, true, true, true);