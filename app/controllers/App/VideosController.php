<?php

namespace App\Controllers\App;

use App\Controllers\Controller;

use App\Middleware\Handler;
use App\Helpers\Pagination;
use App\Helpers\ContentMonitor;

use App\Models\Video;
use App\Models\ContentHistory; // tags history user_id: 1, tag_history: ['tag1' => 1, 'tag2' => 1]
use App\Models\ContentActivity; // content views user_id: 1, content_id: 1, content_type: video, bookmarked: 1
use App\Models\ContentCategory;

class VideosController extends Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $videosPerPage = 24;
        $videoViewPage = (int) request()->params('page') ?? 1;
        $userId = auth()->id();
        $recommendationEnabled = $this->loggedUser['recommendation'] ?? false; // Check if user has agreed to recommendations

        $videoCount = Video::count();

        // Step 1: If recommendation is enabled, fetch tag-relevant content
        $videos = collect(); // Initialize an empty collection

        if ($recommendationEnabled) {
            // Fetch the user's tag history
            $contentHistory = ContentHistory::where('user_id', $userId)->first();
            $tagHistory = $contentHistory ? json_decode($contentHistory->tag_history, true) : [];

            // Get the most visited tags from the user's history
            $visitedTags = array_keys($tagHistory);

            if (!empty($visitedTags)) {
                // Fetch videos matching the user's most visited tags
                $videos = Video::where(function($query) use ($visitedTags) {
                    foreach ($visitedTags as $tag) {
                        $query->orWhere('tags', 'like', '%' . $tag . '%');
                    }
                })->take($videosPerPage)->get();
            }
        }

        // Step 2: If recommendation is disabled or tag-based videos don't fill the page, fetch random videos
        if (!$recommendationEnabled || $videos->count() < $videosPerPage) {
            $relevantVideoIds = $videos->pluck('id')->toArray(); // Get already fetched video IDs

            // Fetch additional random videos excluding already fetched ones
            $randomVideos = Video::whereNotIn('id', $relevantVideoIds)
                ->inRandomOrder() // Fetch random videos
                ->take($videosPerPage - $videos->count())
                ->get();
            
            // Combine existing relevant videos (if any) with random videos
            $videos = $videos->merge($randomVideos);
        }

        // Pagination logic remains the same
        $pagination = new Pagination($videoCount, $videosPerPage, $videoViewPage);

        // If request is ajax, return JSON
        if (request()->isAjax()) {
            return response()->json([
                'status' => true,
                'videos' => view('app.videos.partials.list', ['videos' => $videos]),
                'pagination' => $pagination->render(),
            ]);
        }

        $this->videos = $videos;
        $this->pagination = $pagination;
        $this->popularTags = $this->popularTags();
        return $this->renderPage('Videos', 'app.videos.index');
    }

    # index vides by tags
    public function group($tag)
    {
        $videosPerPage = 24;
        $videoViewPage = (int) request()->params('page') ?? 1;
        $videosCount = Video::where('tags', 'like', "%{$tag}%")->count();

        $videos = Video::where('tags', 'like', "%{$tag}%")
            ->orderBy('created_at', 'desc')
            ->skip(($videoViewPage - 1) * $videosPerPage)
            ->take($videosPerPage)
            ->get();

        $pagination = new Pagination($videosCount, $videosPerPage, $videoViewPage);

        # sidebar settings
        $this->menuLink = 'media';
        $this->active = 'videos';

        # data allocation
        $this->videos = $videos;
        $this->pagination = $pagination;
        return $this->renderPage("Videos in #{$tag}", 'app.videos.index');
    }

    # view video
    public function show($id)
    {
        # find the video
        $video = Video::find($id);
        if(!$video) return response()->markup(view('errors.404'), 404);

        # allocate data
        $this->video = $video;

        # record user's tag history
        Video::viewed($video->id, auth()->id());
        ContentMonitor::recordHistory($video->tags);

        $this->tags = $tags = array_map('trim', explode(',', $video->tags) ?? []);

        // random similar videos, where in set tags like, exclude current video, max 10
        $this->similarVideos = Video::where('id', '!=', $video->id)
            ->where(function($query) use ($tags) {
                foreach ($tags as $tag) {
                    $query->orWhere('tags', 'LIKE', "%{$tag}%");
                }
            })
            ->inRandomOrder()
            ->limit(10)
            ->get();

        $this->videoActivity = ContentActivity::where('user_id', auth()->id())
            ->where('content_id', $video->id)
            ->where('content_type', 'video')
            ->first();

        # sidebar state
        $this->active = 'videos';
        $this->menuLink = 'media';
        $this->sidebar = false;

        # permissions allocation
        $this->canEditVideo = Handler::can('video', 'update');
        $this->canDeleteVideo = Handler::can('video', 'delete');

        return $this->renderPage(null, 'app.videos.show');
    }

    # search videos
    public function search()
    {
        try{
            $search = request()->params('search');
            $videos = Video::search($search);

            if(request()->isAjax()){
                return response()->json([
                    'status' => true,
                    'html' => view('app.videos.partials.list', ['videos' => $videos]),
                ]);
            }
        }

        catch(\Exception $e){
            return $this->jsonException($e);
        }
    }

    # get user's video history
    public function history($userId = null)
    {
        $userId = $userId ?? auth()->id();

        $videosPerPage = 24;
        $videoViewPage = (int) request()->params('page') ?? 1;
        $offset = ($videoViewPage - 1) * $videosPerPage;
        $videoCount = ContentActivity::where('user_id', $userId)
            ->where('content_type', 'video')
            ->count();        

        $contentActivity = ContentActivity::with('video')
            ->where('user_id', $userId)
            ->where('content_type', 'video')
            ->orderBy('updated_at', 'desc')
            ->skip($offset)
            ->take($videosPerPage)
            ->get();

        $pagination = new Pagination($videoCount, $videosPerPage, $videoViewPage);

        $this->videos = $contentActivity;
        $this->pagination = $pagination;

        $this->renderPage('Video History', 'app.videos.history');
    }

    # get bookmarked videos
    public function bookmarks($userId = null)
    {
        $userId = $userId ?? auth()->id();

        $videosPerPage = 24;
        $videoViewPage = (int) request()->params('page') ?? 1;
        $offset = ($videoViewPage - 1) * $videosPerPage;
        $videoCount = ContentActivity::where('user_id', $userId)
            ->where('content_type', 'video')
            ->count();        

        $contentActivity = ContentActivity::with('video')
            ->where('user_id', $userId)
            ->where('content_type', 'video')
            ->where('bookmarked', 1)
            ->orderBy('updated_at', 'desc')
            ->skip($offset)
            ->take($videosPerPage)
            ->get();

        $pagination = new Pagination($videoCount, $videosPerPage, $videoViewPage);

        $this->videos = $contentActivity;
        $this->pagination = $pagination;

        $this->renderPage('Bookmarked Videos', 'app.videos.bookmarks');
    }

    # create video
    public function create()
    {
        $createVideoPermission = Handler::can('video', 'create');
        if(!$createVideoPermission->status)
            return response()->markup(view('errors.403'), 403);

        $this->categories = ContentCategory::all();
        return $this->renderPage('Upload Video', 'app.videos.create');
    }

    # store video
    public function store()
    {
        try{
            $createVideoPermission = Handler::can('video', 'create');
            if(!$createVideoPermission->status)
                return $this->jsonError("You don't have permission to upload videos");

            $data = [
                'title' => request()->params('video-title'),
                'tags' => request()->params('video-tags'),
                'thumbnail' => request()->params('video-thumbnail'),
                'source' => request()->params('video-source'),
                'duration' => round(request()->params('video-duration')),
                'author' => auth()->id(),
            ];

            # if any is null, return error
            if(in_array(null, $data)) return $this->jsonError(__('Invalid video data submitted'));

            $data['tags'] = implode(',', $data['tags']);
            $data['description'] = request()->params('video-description');

            # upload thumbnail
            $thumbnail = request()->uploadAs('video-thumbnail', StoragePath('app/public/videos/covers'), uniqid(), [
                'extensions' => ['jpg', 'jpeg', 'png'],
            ]);

            if(!$thumbnail) return $this->jsonError(__('Invalid thumbnail uploaded'));
            $data['thumbnail'] = str_replace(StoragePath('app/public'), '', $thumbnail['path']);

            # upload video source
            $videoSource = request()->uploadAs('video-source', StoragePath('app/public/videos/source'), uniqid(), [
                'extensions' => ['mp4', 'webm', 'ogg']
            ]);

            if(!$videoSource) return $this->jsonError(__('Invalid video uploaded'));
            $data['source'] = str_replace(StoragePath('app/public'), '', $videoSource['path']);

            // if any is array, return the array
            foreach($data as $key => $value){
                if(is_array($value)) return $this->jsonError($key . ' is invalid');
            }
            
            $video = Video::create($data);
            
            $this->redirect = route('videos.show', $video->id);
            return $this->jsonSuccess(__('Video uploaded successfully'));
        }

        catch(\Exception $e){
            return $this->jsonException($e);
        }
    }

    # timestamp video
    public function timestamp($id){

        $video = Video::find($id);
        if(!$video) return response()->markup(view('errors.404'), 404);
        
        # validate user's permission
        $editVideoPermission = Handler::can('video', 'update');
        if(!Handler::owns($editVideoPermission->scope, $video->author)){
            return response()->markup(view('errors.403'), 403);
        }

        $this->video = $video;
        $this->title = substring($video->title, 0, 30);

        # sidebar state
        $this->active = 'videos';
        $this->menuLink = 'media';

        return $this->renderPage($video->title, 'app.videos.timestamp');            
    }

    # update video timestamp
    public function updateTimestamp($id){

        try{

            $video = Video::find($id);
            if(!$video) return response()->json(['status' => false, 'message' => 'Video not found'], 404);

            # validate user's permission
            $editVideoPermission = Handler::can('video', 'update');
            if(!Handler::owns($editVideoPermission->scope, $video->author)){
                return response()->json(['status' => false, 'message' => 'You do not have permission to update this video'], 403);
            }

            $timesTamps = request()->params('timestamps');
            if(!$timesTamps) return $this->jsonError('No timestamps provided');

            # timestamp:array - title, time, thumbnail:base64
            foreach($timesTamps as $timestamp){
                if(!is_array($timestamp) or !isset($timestamp['title']) or !isset($timestamp['time']) or !isset($timestamp['thumbnail'])) continue;

                if(strlen($timestamp['thumbnail']) > 100):
                    // extract and save images
                    $thumbnail = $timestamp['thumbnail'];
                    $thumbnail = explode(';', $thumbnail)[1];
                    $thumbnail = explode(',', $thumbnail)[1];
                    $thumbnail = base64_decode($thumbnail);

                    $thumbnailPath = '/videos/covers/' . uniqid() . '.png';
                    file_put_contents(StoragePath('app/public' . $thumbnailPath), $thumbnail);

				    else: $thumbnailPath = $timestamp['thumbnail'];
                endif;

                // save timestamp
                $videoKeynotes[] = [
                    'title' => $timestamp['title'],
                    'time' => $timestamp['time'],
                    'thumbnail' => $thumbnailPath
                ];                
            }

            $video->keynotes = $videoKeynotes ?? []; 
            if(!$video->save()) return $this->jsonError('Failed to update video timestamps');
            
            return $this->jsonSuccess('Video keynote updated successfully');
        }

        catch(\Exception $e){
            return $this->jsonException($e);
        }

    }

    /*
    |--------------------------------------------------------------------------
    | Utility methods
    |--------------------------------------------------------------------------
    */

    # get popular tags, index 20 videos, views desc
    public function popularTags(){
        $videos = Video::orderBy('views', 'desc')->take(20)->get();
        $tags = [];
        foreach($videos as $video){
            $tags = array_merge($tags, array_slice(array_map('trim', explode(',', $video->tags) ?? []), 0, 2));
        }

        return array_unique($tags);
    }

    public static function routes(){
        app()->get('/', ['name'=>'videos.list', 'VideosController@index']);
        app()->get('/upload', ['name'=>'videos.create', 'VideosController@create']);

        app()->get('/show/{id}', ['name'=>'videos.show', 'VideosController@show']);
        app()->get('/edit/{id}', ['name'=>'videos.edit', 'VideosController@edit']);
        app()->get('/timestamp/{id}', ['name'=>'videos.timestamp', 'VideosController@timestamp']);

        app()->get('/history', ['name'=>'videos.history', 'VideosController@history']);
        app()->get('/bookmarks', ['name'=>'videos.bookmarks', 'VideosController@bookmarks']);
        app()->get('/group/{tag}', ['name'=>'videos.group', 'VideosController@group']);

        app()->post('/search', ['name'=>'videos.search', 'VideosController@search']);
        app()->post('/upload', ['name'=>'videos.store', 'VideosController@store']);

        app()->post('/timestamp/{id}', ['name'=>'videos.timestamp', 'VideosController@updateTimestamp']);
    }
}