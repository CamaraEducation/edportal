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

Route::add('/view/app/([0-9]*)/([a-z]*)', function($id) {
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
 *                 THE DOCS ROUTES       		   	*
 *                STARTING FROM HERE                *
 ****************************************************/
Route::add('/document', function() {
	return Blade::render('document.list');
});

Route::add('/view/document/([0-9]*)/([A-Za-z\-]*)', function($id, $title) {
	return Blade::render('document.view', ['id' => $id, 'title'=>$title]);
});

Route::add('/add/document', function() {
	return Blade::render('document.create');
});

Route::add('/create/document', function() {
	DocsControl::create();
}, 'post');

Route::add('/book', function() {
	return Blade::render("welcome");
});

/****************************************************
 *                 THE USER ROUTES       		   	*
 *                STARTING FROM HERE                *
 ****************************************************/

Route::add('/users/([a-z]*)', function($type) {
	return Blade::render('user.list', ['type'=>$type]);
});

Route::add('/view/user/([0-9]*)/([A-Za-z\-]*)', function($id) {
	return Blade::render('user.view', ['id' => $id]);
});

Route::add('/add/user', function() {
	return Blade::render('user.create');
});

Route::add('/create/user', function() {
	UsersControl::create();
}, 'post');


/****************************************************
 *                 THE APIS ROUTES       		   	*
 *                STARTING FROM HERE                *
 ****************************************************/
Route::add('/api/live', function() {
	LogsController::log_live_time();
}, ['get', 'post']);


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

Route::add('/session', function() {
	echo '<pre>';
	print_r($_SESSION);
});

// Run the Router with the given Basepath
Route::run(BASEPATH);

// Enable case sensitive mode, trailing slashes and multi match mode by setting the params to true
// Route::run(BASEPATH, true, true, true);