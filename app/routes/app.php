<?php

app()->group('app', ['namespace' => '\App\Controllers\Base', function(){

    app()->get('home', 'HomeController@home');
    app()->get('start', 'HomeController@start');


    app()->group('api', fn() => \App\Controllers\Base\ApiController::routes());
    app()->group('profile', fn() => \App\Controllers\Base\UserController::routes());
    
    # content routes
    app()->group('lms', fn() => \App\Controllers\Base\LmsController::routes());
    app()->group('videos', fn() => \App\Controllers\Base\VideosController::routes());
    app()->group('literature', fn() => \App\Controllers\Base\LiteratureController::routes());
    app()->group('whiteboard', fn() => \App\Controllers\Base\WhiteboardController::routes());

    # misc routes
    app()->group('usage', fn() => \App\Controllers\Base\UsageController::routes());
    app()->get('content/safeguard', ['name' => 'content.safeguard', 'HomeController@safeguard']);

    app()->post('content/track', ['name' => 'content.track', fn() => \App\Helpers\ContentMonitor::recordState()]);
}]);