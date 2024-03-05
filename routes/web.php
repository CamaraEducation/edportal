<?php
use duncan3dc\Laravel\Blade;

Route::add('/', function() {
	if(isset($_SESSION['id'])) {
		return Blade::render("welcome");
	} else {
		Route::redirect('/login');
	}
});

/****************************************************
 *                  THE APPS ROUTES       		   	*
 *                STARTING FROM HERE                *
 ****************************************************/

Route::add('/add/app', function() {
	return Blade::render('admin.apps');
},['get', 'post']);

Route::add('/view/app/([0-9]*)/([a-zA-Z0-9_.-]*)', function($id) {
	return Blade::render('project', ['id' => $id]);
});

Route::add('/live/app/([0-9]*)/([A-Za-z0-9\-\&\,]*)', function($id) {
	return Blade::render('apps.live', ['id' => $id]);
});

Route::add('/create/app', function() {
	AppsControl::create();
}, 'post');

Route::add('/stats/app', function() {
	return Blade::render('apps.stats');
});


/****************************************************
 *                 THE VIDEO ROUTES       		   	*
 *                STARTING FROM HERE                *
 ****************************************************/
Route::add('/video', function() {
	return Blade::render('video.subject');
});

Route::add('/view/video/ict', function() {
	return Blade::render('video.ict');
});

Route::add('/view/video/ubongo', function() {
	return Blade::render('video.ubongo');
});

Route::add('/video/([0-9]*)/([A-Za-z0-9\-\&\,]*)', function($id) {
	return Blade::render('video.list', ['id' => $id]);
});

Route::add('/view/video/([0-9]*)/([A-Za-z\-]*)', function($id, $title) {
	return Blade::render('video.view', ['id' => $id, 'title'=> $title]);
});

Route::add('/add/video', function() {
	return Blade::render('video.create');
});

Route::add('/stats/video', function() {
	return Blade::render('video.stats');
});

Route::add('/create/video', function() {
	VideosControl::create();
}, 'post');

Route::add('/delete/video/([0-9]*)', function($id) {
	VideosControl::delete($id);
},['get', 'post']);

/****************************************************
 *            THE NOTES & NOTICCE ROUTES        	*
 *               STARTING FROM HERE                *
 ****************************************************/

Route::add('/create/notice', function() {
	return Blade::render('notice.create');
});

Route::add('/add/notice', function() {
	Notice::create();
}, 'post');

/****************************************************
 *                 THE DOCS ROUTES       		   	*
 *                STARTING FROM HERE                *
 ****************************************************/
Route::add('/document', function() {
	return Blade::render('document.subject');
});

Route::add('/document/([0-9]*)/([A-Za-z0-9\-\&\,]*)', function($id) {
	return Blade::render('document.list', ['id' => $id]);
});

Route::add('/view/document/([0-9]*)/([A-Za-z0-9\-\&\,]*)', function($id, $title) {
	return Blade::render('document.view', ['id' => $id, 'title'=>$title]);
});

Route::add('/add/document', function() {
	return Blade::render('document.create');
});

Route::add('/create/document', function() {
	DocsControl::create();
}, 'post');

Route::add('/stats/document', function() {
	return Blade::render('document.stats');
});

Route::add('/delete/document/([0-9]*)', function($id) {
	DocsControl::delete($id);
},['get', 'post']);

Route::add('/notes', function() {
	return Blade::render("");
});

Route::add('/add/notes', function() {
	return Blade::render("notes.create");
},['get', 'post']);

/****************************************************
 *                 THE USER ROUTES       		   	*
 *                STARTING FROM HERE                *
 ****************************************************/

Route::add('/users/([a-z]*)', function($type) {
	return Blade::render('user.list', ['type'=>$type]);
});

Route::add('/delete/user/([0-9]*)', function($id) {
	UsersControl::delete($id);
});

Route::add('/view/user/([0-9]*)/([A-Za-z\-\&\,]*)', function($id) {
	return Blade::render('user.view', ['id' => $id]);
});

Route::add('/add/user', function() {
	return Blade::render('user.create');
});

Route::add('/import/user', function() {
	return Blade::render('user.import');
});

Route::add('/create/user', function() {
	UsersControl::create();
}, 'post');

Route::add('/create/users', function() {
	echo '<pre>';
	UsersImport::students();
}, 'post');

Route::add('/account', function() {
	return Blade::render('user.profile');
});


/****************************************************
 *             LOGS, STATS & ANALYTICS      		*
 *                STARTING FROM HERE                *
 ****************************************************/

Route::add('/log/time', function() {
	LogsController::log_live_time();
}, ['get', 'post']);

Route::add('/log/app', function() {
	LogsController::log_app_visit();
}, ['get', 'post']);

Route::add('/log/video', function() {
	LogsController::log_video_activity();
}, ['get', 'post']);

/****************************************************
 *                THE DROPBOX ROUTES       		   	*
 *                STARTING FROM HERE                *
 ****************************************************/

Route::add('/dropbox', function() {
	return Blade::render('dropbox.list');
});

Route::add('/dropbox/add', function() {
	return Blade::render('dropbox.add');
});

Route::add('/create/dropbox', function() {
	DropboxControl::create();
}, 'post');


/****************************************************
 *                	  MISCALENOUS       		   	*
 *                STARTING FROM HERE                *
 ****************************************************/

Route::add('/search/portal', function() {
	return Blade::render('search');
});

Route::add('/search', function() {
	Utilities::search();
}, ['get', 'post']);

Route::add('/update/portal/([a-z]*)', function($type) {
	switch($type){
		case 'stash':
			if(PHP_OS_FAMILY == 'Windows'){ $stash = shell_exec('git stash'); echo "<pre>" .$stash. "</pre>";
				}else{ 
					exec("sudo cp -f /www/wwwroot/default/manic/config.log /www/wwwroot/");
					$stash = shell_exec('sudo git stash');  echo "<pre>" .$stash. "</pre>";
			}
		break;

		case 'pull':
			if(PHP_OS_FAMILY == 'Windows'){ $pull = shell_exec('git pull origin main'); echo "<pre>" .$pull. "</pre>";
				}else{ $pull = shell_exec('sudo git pull origin main');  echo "<pre>" .$pull. "</pre>";
			}
		break;

		case 'apply': PortalUpdate::init(); break;

		default: break;
	}
},['get', 'post']);

Route::add('/update/portal', function() {
	return Blade::render('system.update');
});

Route::add('/update/portal/auto', function() {
	PortalUpdate::auto();
});

Route::add('/export/portal', function() {
	return Blade::render('system.export');
});

Route::add('/configure/portal', function() {
	return Blade::render('system.config');
});

Route::add('/configure/sync', function() {
	return Blade::render('system.connect');
});

Route::add('/configure/sync/([a-z]*)', function($data) {
	if($data == 'sync'){
		return Blade::render('system.connect.connsum');
	}else{
		return Blade::render('system.connect.nmsdata');
	}
});

Route::add('/change/configs', function() {
	ConfigsController::update();
}, ['get', 'post']);

Route::add('/support', function() {
	return Blade::render('system.support');
}, ['get', 'post']);

Route::add('/sync', function() {
	return Blade::render('system.sync');
}, ['get', 'post']);

Route::add('/manic/sync', function() {
	echo ManicController::init();
}, ['get', 'post']);

Route::add('/manic/awsync', function() {
	echo AWController::init();
}, ['get', 'post']);

Route::add('/manic/clients', function() {
	$clients = StatsController::count_clients();

	if($clients->getRowCount() > 0){
		foreach($clients as $client){
			echo "$client->DeviceName <br>";
		}
	}else{
		echo "No device captured";
	}

}, ['get', 'post']);

/****************************************************
 *                 	  LMS SECTION   	            *
 *             							            *
 ****************************************************/

Route::add('/lms', function() {
	return Blade::render('lms.index');
});

Route::add('/lms/s/([0-9]*)', function($id) {
	return Blade::render('lms.list', ['id' => $id]);
});

Route::add('/lms/c/add', function() {
	return Blade::render('lms.course.create');
});

Route::add('/lms/c/create', function() {
	LmsController::create();
}, ['get', 'post']);

Route::add('/lms/c/my', function() {
	return Blade::render('lms.course.my');
});

Route::add('/lms/c/([0-9]*)', function($id) {
	return Blade::render('lms.course.view', ['id' => $id]);
});

Route::add('/lms/c/edit/([0-9]*)', function($id) {
	return Blade::render('lms.course.edit', ['id' => $id]);
});

Route::add('/lms/board', function() {
	return Blade::render('apps.board');
});

Route::add('/lms/board/(.*)', function($id) {
	header("Access-Control-Allow-Origin: *");
	echo Board::view($id);
}, ['get', 'post']);


/****************************************************
 *               SAFEGUARDING SECTION   	        *
 *             							            *
 ****************************************************/

Route::add('/safeguarding', function() {
	return Blade::render('safeguarding.home');
});