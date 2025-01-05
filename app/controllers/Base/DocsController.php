<?php

namespace App\Controllers\Base;

use App\Models\Document;
use App\Models\ContentHistory;
use App\Models\ContentCategory;
use App\Models\ContentActivity;

use App\Helpers\Pagination;
use App\Helpers\ContentMonitor;
use App\Controllers\Controller;
use PhpOffice\PhpWord\Reader\ODText\Content;

class DocsController extends Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $docsPerPage = 24;
        $docViewPage = (int) request()->params('page') ?? 1;
        $userId = auth()->id();
        $recommendationEnabled = $this->loggedUser['recommendation'] ?? false; // Check if user has agreed to recommendations

        $docCount = Document::count();

        // Step 1: Fetch tag-relevant documents based on recommendation preference
        $documents = collect(); 

        if ($recommendationEnabled) {
            // Fetch the user's tag history
            $contentHistory = ContentHistory::where('user_id', $userId)->first();
            $tagHistory = $contentHistory ? json_decode($contentHistory->tag_history, true) : [];

            // Get the most visited tags from the user's history
            $visitedTags = array_keys($tagHistory);

            if (!empty($visitedTags)) {
                // Fetch documents matching the user's most visited tags
                $documents = Document::with('user_activity')->where(function($query) use ($visitedTags) {
                    foreach ($visitedTags as $tag) {
                        $query->orWhere('tags', 'like', '%' . $tag . '%');
                    }
                })->take($docsPerPage)->get();
            }
        }

        // Step 2: If recommendation is disabled or tag-based docs don't fill the page, fetch random documents
        if (!$recommendationEnabled || $documents->count() < $docsPerPage) {
            $relevantDocIds = $documents->pluck('id')->toArray(); // Get already fetched document IDs

            // Fetch additional random documents excluding already fetched ones
            $randomDocs = Document::with('user_activity')->whereNotIn('id', $relevantDocIds)
                ->inRandomOrder() // Fetch random documents
                ->take($docsPerPage - $documents->count())
                ->get();
            
            // Combine existing relevant documents (if any) with random documents
            $documents = $documents->merge($randomDocs);
        }

        // Pagination logic
        $pagination = new Pagination($docCount, $docsPerPage, $docViewPage);

        // If request is ajax, return JSON
        if (request()->isAjax()) {
            return response()->json([
                'status' => true,
                'documents' => view('app.docs.partials.list', ['documents' => $documents]),
                'pagination' => $pagination->render(),
            ]);
        }

        // Render the page with the documents and pagination
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

        $this->active = 'docs'; 
        $this->menuLink = 'literature';
        $this->tags = ContentCategory::all();

        return $this->renderPage('Upload Document', 'app.docs.create');
    }

    # store document
    public function store(){
        try{
            $data = [
                'name' => request()->params('doc-name'),
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

            $doc = Document::create($data);
            
            $this->redirect = route('books.list');
            return $this->jsonSuccess(__('Document uploaded successfully'));
        }

        catch(\Exception $e){
            return $this->jsonException($e);
        }
    }

    # edit document details
    public function edit($docId){
        try{
            $doc = Document::find($docId);
            if(!$doc) return response()->json(['status' => false, 'message' => 'Document not found'], 404);

            $this->doc = $doc;
            $this->tags = ContentCategory::all();
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
        app()->get('/', ['name' => 'books.list', 'DocsController@index']);
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