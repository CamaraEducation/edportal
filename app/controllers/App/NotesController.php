<?php

namespace App\Controllers\App;

use App\Models\Notes;
use App\Models\ContentCategory;
use App\Controllers\Controller;

class NotesController extends Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $this->renderPage('Notes', 'app.notes.index');
    }

    public function show($id)
    {
        
    }

    public function create()
    {
        $this->active = 'notes';
        $this->menuLink = 'literature';

        # check if there's an untitled document
        $document = Notes::where('title', 'Untitled Document')->where('author', auth()->id())->first();

        if(!$document){
            $documentIdentifier = md5(uniqid());
            $filePaths = [
                'draft' => StoragePath("app/private/notes/draft/$documentIdentifier.json"),
                'source' => StoragePath("app/private/notes/source/$documentIdentifier.edpf")
            ]; foreach($filePaths as $file) file_put_contents($file, '');


            # create new notes
            $document = Notes::create([
                'title' => 'Untitled Document',
                'author' => auth()->id(),
                'draft' => $filePaths['draft'],
                'source' => $filePaths['source']
            ]);
        }
        
        $this->draft = file_get_contents($document->draft);
        $this->source = file_get_contents($document->source);
        
        $this->document = $document;
        $this->tags = ContentCategory::all();
        $this->documentTags = array_map('trim', explode(',', $document->tags ?? ''));
        
        $this->renderPage('Untitled Document', 'app.notes.create');

    }

    public static function routes()
    {
        app()->get('/', ['name' => 'notes.list', 'NotesController@index']);
        
        app()->get('/show/{id}', ['name' => 'notes.show', 'NotesController@show']);
        app()->get('/edit/{id}', ['name' => 'notes.show', 'NotesController@show']);

        app()->get('/create', ['name' => 'notes.create', 'NotesController@create']);
        
        app()->post('/create', ['name' => 'notes.store', 'NotesController@store']);
    }
}