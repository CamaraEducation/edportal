<?php

namespace App\Controllers\Base;


use App\Controllers\Controller;

use App\Models\Notes;
use App\Models\ContentHistory;
use App\Models\ContentCategory;
use App\Helpers\Pagination;

class NotesController extends Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $notesPerPage = 16;
        $notesCount = Notes::count();
        $notesViewPage = (int) request()->query('page', 1);

        $userId = auth()->id();
        $recommendationEnabled = auth()->user()['recommend'];

        $notes = collect();

        if($recommendationEnabled){
            $contentHistory = ContentHistory::where('user_id', $userId)->first();
            $tagHistory = $contentHistory ? $contentHistory->tag_history : [];

            $visitedTags = array_keys($tagHistory);
            if(!empty($visitedTags)) {
                $notes = Notes::where('is_public', 1)->where(function($query) use ($visitedTags){
                    foreach($visitedTags as $tag){
                        $query->orWhere('tags', 'like', "%$tag%");
                    }
                })->orderBy('updated_at', 'desc')
                ->take($notesPerPage)
                ->get();
            }
        }

        if (!$recommendationEnabled || $notes->count() < $notesPerPage) {
            $relevantNotesIds = $notes->pluck('id')->toArray(); // Get already fetched Notes IDs

            // Fetch additional random notes excluding already fetched ones
            $randomnotes = Notes::whereNotIn('id', $relevantNotesIds)
                ->inRandomOrder() // Fetch random notes
                ->take($notesPerPage - $notes->count())
                ->get();
            
            // Combine existing relevant notes (if any) with random notes
            $notes = $notes->merge($randomnotes);
        }

        // Pagination logic remains the same
        $pagination = new Pagination($notesCount, $notesPerPage, $notesViewPage);

        // If request is ajax, return JSON
        if (request()->isAjax()) {
            return response()->json([
                'status' => true,
                'notes' => view('app.notes.partials.list', ['notes' => $notes]),
                'pagination' => $pagination->render(),
            ]);
        }

        $this->notes = $notes;
        $this->pagination = $pagination;
        return $this->renderPage('Notes', 'app.notes.index');
    }

    public function show($id)
    {
        $document = Notes::find($id);
        if(!$document) return $this->errorPage(404);

        if($document->author != auth()->id() && !$document->is_public) return $this->errorPage(403);

        $this->document = $document;
        $this->renderPage($document->title, 'app.notes.show');
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
                // 'draft' => StoragePath("app/private/notes/draft/$documentIdentifier.json"),
                'source' => StoragePath("app/private/notes/source/$documentIdentifier.md")
            ]; foreach($filePaths as $file) file_put_contents($file, '');


            # create new notes
            $document = Notes::create([
                'title' => 'Untitled Document',
                'author' => auth()->id(),
                // 'draft' => $filePaths['draft'],
                'source' => $filePaths['source']
            ]);
        }

        return redirect(route('notes.edit', $document->id));

    }

    public function edit($id)
    {
        $document = Notes::find($id);
        if(!$document) return $this->errorPage(404);

        # validate user
        if($document->author != auth()->id()) return $this->errorPage(403);

        # sidebar state
        $this->active = 'notes';
        $this->menuLink = 'literature';

        $this->source = file_get_contents($document->source);
        
        $this->document = $document;
        $this->tags = ContentCategory::all();
        $this->documentTags = array_map('trim', explode(',', $document->tags ?? ''));
        
        $this->renderPage($document->title, 'app.notes.create');
    }

    public function save(){
        try{
            $data = [
                'id' => request()->params('id'),
                'title' => request()->params('title'),
                'content' => request()->params('content')
            ];

            $document = Notes::find($data['id']);
            if(!$document) return $this->jsonError('Document not found');
            
            if($document->author != auth()->id())
                return $this->jsonError('You are not authorized to edit this document');

            $document->updated_at = date('Y-m-d H:i:s');
            file_put_contents($document->source, $data['content']);
            $document->title = strlen($data['title']) > 0 ? $data['title'] : 'Untitled Document';   

            if($document->save()) return $this->jsonSuccess('Document saved successfully');
            return $this->jsonError('Failed to save document');
        }

        catch(\Exception $e){
            return $this->jsonException($e);
        }
    }       

    public function update(){

    }

    public function mine()
    {
        $notes = Notes::where('author', auth()->id())->get();
        $this->notes = $notes;

        return $this->renderPage('My Notes', 'app.notes.mine');
    }

    public static function routes()
    {
        app()->get('/', ['name' => 'notes.list', 'NotesController@index']);
        app()->get('/mine', ['name' => 'notes.mine', 'NotesController@mine']);
        
        app()->get('/show/{id}', ['name' => 'notes.show', 'NotesController@show']);
        app()->get('/edit/{id}', ['name' => 'notes.edit', 'NotesController@edit']);
        app()->get('/create', ['name' => 'notes.create', 'NotesController@create']);
        
        app()->post('/save', ['name' => 'notes.save', 'NotesController@save']);
        app()->post('/update', ['name' => 'notes.update', 'NotesController@update']);
    }
}