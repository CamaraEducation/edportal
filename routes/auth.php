<?php
use duncan3dc\Laravel\Blade;

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

Route::add('/logout', function() {
	session_destroy();
	header('Location: /login');
});