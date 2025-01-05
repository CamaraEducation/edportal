<?php

app()->group('hook', ['namespace' => 'App\Controllers\Api', function() {

    app()->get('/', fn() => 
        response()->json(['message' => 'Welcome to the Leaf API']));

}]);