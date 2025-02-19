<?php

/*
|--------------------------------------------------------------------------
| Set up 404 handler
|--------------------------------------------------------------------------
|
| Leaf provides a default 404 page, but you can create your own
| 404 handler by uncommenting the code below. The function
| you set here will be called when a 404 error is encountered
|
*/
app()->set404(function() {
    $isApiRequest = strpos($_SERVER['REQUEST_URI'], 'api') == 1;
    if ($isApiRequest or request()->isAjax()) {
        response()->json(['status' => false, 'message' => 'Page not found'], 404);
    } else {
        return response()->markup(view('errors.404'), 404);
    }
});

/*
|--------------------------------------------------------------------------
| Set up 500 handler
|--------------------------------------------------------------------------
|
| Leaf provides a default 500 page, but you can create your own
| 500 handler by uncommenting the code below. The function
| you set here will be called when a 500 error is encountered
|
*/
if(_env('APP_DEBUG') == 'false'){
    app()->setErrorHandler(function() {
        $isApiRequest = strpos($_SERVER['REQUEST_URI'], '/api') !== false;
        if ($isApiRequest or request()->isAjax()) {
            response()->json(['status' => false, 'message' => 'An error occurred'], 500);
        } else {
            return response()->markup(view('errors.500'), 500);
        }
    });
}

/*
|--------------------------------------------------------------------------
| Load the Auth middleware
|--------------------------------------------------------------------------
|
| This loads the auth middleware. The auth middleware is used to
| protect routes from unauthenticated users.
|
*/
call_user_func([new \App\Middleware\Auth, 'init']);

/*
|--------------------------------------------------------------------------
| Set up Controller namespace
|--------------------------------------------------------------------------
|
| This allows you to directly use controller names instead of typing
| the controller namespace first.
|
*/
app()->setNamespace('\App\Controllers');

/*
|--------------------------------------------------------------------------
| Your application routes
|--------------------------------------------------------------------------
|
| Leaf MVC automatically loads all files in the routes folder that
| don't start with "guard" or "index". You can also load routes
| manually using the require_files() function.
|
*/
$routes = scandir('app/routes');
$ignore = ['.', '..', 'guard', 'index.php'];

foreach($routes as $file) {
    if(!in_array($file, $ignore))
        require_files('app/routes/'.$file);
}