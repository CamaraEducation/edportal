<?php

app()->group('api', ['namespace' => 'App\Controllers\Api', function() {

    app()->get('/', fn() => response()->json(['message' => 'Welcome to the Leaf API']));

    app()->group('sync/lab', fn() => \App\Controllers\Api\LabUsageController::routes());

}]);