<?php

namespace App\Controllers\App;

use App\Controllers\Controller;

use App\Models\Slide;
use App\Models\Notes;
use App\Models\Document;
use App\Models\ContentActivity;

class LiteratureController extends Controller
{

    public function history()
    {
        $this->documents = ContentActivity::fetch(auth()->id(), 'document');
        return $this->renderPage('History', 'app.literature.history');
    }

    public function bookmarks()
    {
        $this->documents = ContentActivity::bookmarks(auth()->id(), 'document');
        return $this->renderPage('Bookmarks', 'app.literature.bookmarks');
    }

    public static function routes()
    {
        app()->get('/history', ['name' => 'literature.history', 'LiteratureController@history']);
        app()->get('/bookmarks', ['name' => 'literature.bookmarks', 'LiteratureController@bookmarks']);

        app()->group('docs', fn() => \App\Controllers\App\DocsController::routes());
        app()->group('notes', fn() => \App\Controllers\App\NotesController::routes());
        app()->group('slides', fn() => \App\Controllers\App\SlidesController::routes());
    }
}