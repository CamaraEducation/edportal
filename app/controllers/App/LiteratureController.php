<?php

namespace App\Controllers\App;

use App\Controllers\Controller;

class LiteratureController extends Controller
{
    public static function routes()
    {
        app()->get('/history', ['name' => 'literature.history', 'LiteratureController@history']);
        app()->get('/bookmarks', ['name' => 'literature.bookmarks', 'LiteratureController@bookmarks']);

        app()->group('docs', fn() => \App\Controllers\App\DocsController::routes());
        app()->group('notes', fn() => \App\Controllers\App\NotesController::routes());
        app()->group('slides', fn() => \App\Controllers\App\SlidesController::routes());
    }
}