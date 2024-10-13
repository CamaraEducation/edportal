<?php

use App\Controllers\AuthController;

app()->redirect('/login', '/auth/login');
app()->redirect('/reset', '/auth/reset');

app()->group('auth', function(){

    app()->get('/login', ['name'=>'login', 'AuthController@signin']);
    app()->post('/login', ['name'=>'login', 'AuthController@login']);

    app()->get('/logout', ['name'=>'logout', 'AuthController@logout']);

});

app()->group('api', function(){
    app()->group('/auth', function(){
        app()->post('/login', ['name'=>'apiLogin', 'AuthController@login']);
    });
});