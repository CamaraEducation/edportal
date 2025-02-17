<?php

namespace App\Controllers\Base;

use App\Models\Document;
use App\Models\DocumentType;
use App\Models\ContentHistory;
use App\Models\ContentCategory;
use App\Models\ContentActivity;

use App\Helpers\Pagination;
use App\Helpers\ContentMonitor;
use App\Controllers\Controller;

use App\Middleware\Handler;

class DocsController extends Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function index($docType = 'docs')
    {
        $docsPerPage = 24;
        $docViewPage = (int) request()->params('page') ?? 1;
        $userId = auth()->id();
        $recommendationEnabled = $this->loggedUser['recommendation'] ?? false;

        $query = Document::query();

        if ($docType) {
            $query->where('type', $docType);
        }

        $docCount = $query->count();

        $documents = collect();

        if ($recommendationEnabled) {
            $contentHistory = ContentHistory::where('user_id', $userId)->first();
            $tagHistory = $contentHistory ? json_decode($contentHistory->tag_history, true) : [];

            $visitedTags = array_keys($tagHistory);

            if (!empty($visitedTags)) {
                $documents = $query->with('user_activity')->where(function($q) use ($visitedTags) {
                    foreach ($visitedTags as $tag) {
                        $q->orWhere('tags', 'like', '%' . $tag . '%');
                    }
                })->take($docsPerPage)->get();
            }
        }

        if (!$recommendationEnabled || $documents->count() < $docsPerPage) {
            $relevantDocIds = $documents->pluck('id')->toArray();

            $randomDocs = $query->with('user_activity')->whereNotIn('id', $relevantDocIds)
                ->inRandomOrder()
                ->take($docsPerPage - $documents->count())
                ->get();

            $documents = $documents->merge($randomDocs);
        }

        $pagination = new Pagination($docCount, $docsPerPage, $docViewPage);

        if (request()->isAjax()) {
            return response()->json([
                'status' => true,
                'documents' => view('app.docs.partials.list', ['documents' => $documents]),
                'pagination' => $pagination->render(),
            ]);
        }

        $this->documents = $documents;
        $this->pagination = $pagination;
        return $this->renderPage('Documents', 'app.docs.index');
    }

    public function show($docId){
        $document = Document::find($docId);
        if(!$document) return response()->json(['status' => false, 'message' => 'Document not found'], 404);

        Document::viewed($docId, auth()->id());
    }

    # search documents
    public function search(){
        try{
            $search = request()->params('search');
            $docs = Document::search($search);

            if(request()->isAjax()){
                return response()->json([
                    'status' => true,
                    'html' => view('app.docs.partials.list', ['documents' => $docs]),
                ]);
            }
        }

        catch(\Exception $e){
            return $this->jsonException($e);
        }
    }

    # create new document
    public function create(){

        if(!Handler::can('book', 'create')->status)
            return $this->errorPage(403);

        $this->active = 'docs'; 
        $this->menuLink = 'literature';
        $this->tags = ContentCategory::all();
        $this->docTypes = DocumentType::all();

        return $this->renderPage('Upload Document', 'app.docs.create');
    }

    # store document
    public function store(){

        if(!Handler::can('book', 'create')->status)
            return $this->jsonError('You are not authorized to upload documents');

        try{
            $data = [
                'name' => request()->params('doc-name'),
                'type' => request()->params('doc-type'),
                'tags' => request()->params('doc-tags'),
                'source' => request()->params('doc-file'),
                'author' =>auth()->id()
            ];

            if(in_array(null, $data)) return $this->jsonError(__('All fields are required'));
            
            $data['tags'] = implode(',', $data['tags']);
            $data['description'] = request()->params('doc-description');

            # upload document
            $data['source'] = (function(){
                $file = request()->uploadAs('doc-file', StoragePath('app/public/docs'), uniqid(), [
                    'extensions' => ['pdf']
                ]);

                if(!$file) return $this->jsonError(__('Failed to upload document'));
                return str_replace(StoragePath('app/public'), '', $file['path']);
            })();

            # upload thumbnail
            if(request()->params('doc-thumbnail')){
                $data['thumbnail'] = (function(){
                    $file = request()->uploadAs('doc-thumbnail', StoragePath('app/public/docs/covers'), uniqid(), [
                        'extensions' => ['jpg', 'jpeg', 'png']
                    ]);

                    if(!$file) return $this->jsonError(__('Failed to upload thumbnail'));
                    return str_replace(StoragePath('app/public'), '', $file['path']);
                })();
            }

            Document::create($data);
            
            $this->redirect = route('books.list', $data['type']);
            return $this->jsonSuccess(__('Document uploaded successfully'));
        }

        catch(\Exception $e){
            return $this->jsonException($e);
        }
    }

    # edit document details
    public function edit($docId){

        if(!Handler::can('book', 'update')->status)
            return $this->jsonError('You don\'t have permission to edit document');

        try{
            $doc = Document::find($docId);
            if(!$doc) return $this->jsonError('Document not found');

            // check ownership
            if($doc->author != auth()->id() && auth()->id() > 1) 
                return $this->jsonError('You are not authorized to edit this document');

            $this->doc = $doc;
            $this->tags = ContentCategory::all();
            $this->docTypes = DocumentType::all();
            $this->documentTags = array_map('trim', explode(',', $doc->tags));
            
            return response()->json([
                'status' => true,
                'html' => view('app.docs.partials.edit', $this->data)
            ]);
        }

        catch(\Exception $e){
            return $this->jsonException($e);
        }
    }

    
    public function update($id)
    {
        try{
            $document = Document::find($id);
            if(!$document) return $this->jsonError('Document not found');

            // check ownership
            if($document->author != auth()->id() && auth()->id() > 2) 
                return $this->jsonError('You are not authorized to edit this document');

            $data = [
                'name' => request()->params('name', $document->name),
                'tags' => request()->params('tags') ? implode(',', request()->params('tags')) : $document->tags,
                'type' => request()->params('type', $document->type),
                'description' => request()->params('description', $document->description),
            ];

            if(request()->params('thumbnail')){
                $data['thumbnail'] = (function() use ($document){
                    $file = request()->uploadAs('thumbnail', StoragePath('app/public/docs/covers'), uniqid(), [
                        'extensions' => ['jpg', 'jpeg', 'png']
                    ]);

                    if(!$file) return $document->thumbnail;
                    return str_replace(StoragePath('app/public'), '', $file['path']);
                })();
            }

            $document->fill($data);
            if(!$document->save())
                return $this->jsonError('Failed to update document');

            return $this->jsonSuccess('Document updated successfully');            
        }

        catch(\Exception $e){
            return $this->jsonException($e);
        }
    }

    public function bookmark($docId)
    {
        try{
            $document = ContentActivity::where('content_id', $docId)->where('user_id', auth()->id())->first();
            if(!$document)
                return response()->json(['status' => false, 'message' => 'To bookmark a document, you must first view it']);

            $state = !$document->bookmarked;
            Document::bookmark($docId, auth()->id(), $state);
            
            return response()->json([
                'status' => true,
                'message' => $state ? 'Document bookmarked' : 'Bookmark removed'
            ]);
        }

        catch(\Exception $e){
            return $this->jsonException($e);
        }
    }

    public function delete($docId)
    {
        try{
            $doc = Document::find($docId);
            if(!$doc) return response()->json(['status' => false, 'message' => 'Document not found'], 404);

            if($doc->author != auth()->id() && auth()->id() > 2) 
                return response()->json(['status' => false, 'message' => 'You are not authorized to delete this document'], 403);

            $docFile = StoragePath('app/public') . $doc->source;
            if(file_exists($docFile)) unlink($docFile);

            if($doc->delete()){

                // purge content activity
                ContentActivity::where('content_id', $docId)->delete();

                return response()->json([
                    'status' => true,
                    'message' => 'Document deleted successfully'
                ]);
            }

            return response()->json([
                'status' => false,
                'message' => 'Document could not be deleted'
            ]);
        }

        catch(\Exception $e){
            return $this->jsonException($e);
        }
    }

    public static function routes()
    {
        app()->get('/list/{type}', ['name' => 'books.list', 'DocsController@index']);
        app()->get('/create', ['name' => 'docs.create', 'DocsController@create']);

        app()->get('/edit/{id}', ['name' => 'docs.edit', 'DocsController@edit']);
        app()->get('/delete/{id}', ['name' => 'docs.delete', 'DocsController@delete']);
        app()->get('/bookmark/{id}', ['name' => 'docs.bookmark', 'DocsController@bookmark']);
        
        app()->post('/create', ['name' => 'docs.store', 'DocsController@store']);
        app()->post('/search', ['name' => 'docs.search', 'DocsController@search']);
        
        app()->post('/show/{id}', ['name' => 'docs.show', 'DocsController@show']);
        app()->post('/edit/{id}', ['name' => 'docs.edit', 'DocsController@update']);
    }
}