<?php

namespace App\Controllers\Base;

use App\Controllers\Controller;
use App\Models\Slide;
use App\Helpers\Pagination;

class SlidesController extends Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->active = "slides";
        $this->title = "Slides & Presentations";
    }

    public function index()
    {
        $slidesPerPage = 24;
        $slideViewPage = (int) request()->params('page') ?? 1;

        // Fetch the total slide count, only counting public slides
        $slideCount = Slide::where('is_public', 1)->count();

        // Fetch the slides with pagination, showing only public slides
        $slides = Slide::where('is_public', 1)
            ->orderBy('created_at', 'desc')
            ->skip(($slideViewPage - 1) * $slidesPerPage)
            ->take($slidesPerPage)
            ->get();

        // Set up pagination
        $pagination = new Pagination($slideCount, $slidesPerPage, $slideViewPage);

        // If request is AJAX, return JSON
        if (request()->isAjax()) {
            return response()->json([
                'status' => true,
                'slides' => view('app.slides.partials.list', ['slides' => $slides]),
                'pagination' => $pagination->render(),
            ]);
        }

        // Pass data to the view and render the page
        $this->slides = $slides;
        $this->pagination = $pagination;
        return $this->renderPage('Slides & Presentations', 'app.slides.index');
    }

    public function build()
    {
        return $this->renderPage('Create a Slide', 'app.slides.build');
    }

    public function preview()
    {
        return $this->renderPage('Slide Preview', 'app.slides.preview');
    }

    public static function routes()
    {
        app()->get('/', ['name' => 'slides.list', 'SlidesController@index']);
        app()->get('/build', ['name' => 'slides.create', 'SlidesController@build']);
        app()->get('/preview', ['name' => 'slides.preview', 'SlidesController@preview']);
        app()->get('/show/{id}', ['name' => 'slides.show', 'SlidesController@show']);
        
        app()->post('/create', ['name' => 'slides.store', 'SlidesController@store']);
        app()->post('/search', ['name' => 'slides.search', 'SlidesController@search']);
    }
}