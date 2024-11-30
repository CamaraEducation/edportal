<?php

app()->group('app', ['namespace' => '\App\Controllers\App', function(){

    app()->get('home', 'HomeController@home');
    app()->get('start', 'HomeController@start');


    app()->group('api', fn() => \App\Controllers\App\ApiController::routes());
    app()->group('profile', fn() => \App\Controllers\App\UserController::routes());
    
    # content routes
    app()->group('lms', fn() => \App\Controllers\App\LmsController::routes());
    app()->group('videos', fn() => \App\Controllers\App\VideosController::routes());
    app()->group('literature', fn() => \App\Controllers\App\LiteratureController::routes());
    app()->group('whiteboard', fn() => \App\Controllers\App\WhiteboardController::routes());

    # misc routes
    app()->group('usage', fn() => \App\Controllers\App\UsageController::routes());
    app()->post('content/track', ['name' => 'content.track', fn() => \App\Helpers\ContentMonitor::recordState()]);
}]);