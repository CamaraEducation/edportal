<?php

namespace App\Controllers\App;

use App\Controllers\Controller;

use App\Models\ContentActivity;

class LiteratureController extends Controller
{

    public function history()
    {
        $this->documents = ContentActivity::fetch(auth()->id(), 'document');
        $this->title = 'Read History';

        return render('app.literature.history', $this->data);
    }

    public static function routes()
    {
        app()->get('/history', ['name' => 'literature.history', 'LiteratureController@history']);
    
        app()->group('docs', fn() => \App\Controllers\App\DocsController::routes());
        app()->group('notes', fn() => \App\Controllers\App\NotesController::routes());
        app()->group('slides', fn() => \App\Controllers\App\SlidesController::routes());
    }
}