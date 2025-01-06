<?php

namespace App\Controllers\Base;

use App\Controllers\Controller;

use App\Models\Video;
use App\Models\Document;
use App\Models\LmsCourse;

class HomeController extends Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function home(){

        $this->data->title = 'Dashboard';
        $this->contentStats = $this->portalStats();
        $this->courses = LmsCourse::featured(4);

        render('app.dashboard.home', $this->data);
    }

    public function portalStats(){
        return [
            'videos' => [
                'icon' => 'ph-video text-primary',
                'total' => Video::count()
            ],
            'documents' => [
                'icon' => 'ph-book text-warning',
                'total' => Document::count()
            ],
            'courses' => [
                'icon' => 'ph-cards text-info',
                'total' => LmsCourse::count()
            ]
        ];
    }

    public function safeguard(){
        $this->videos = Video::where('tags', 'like', '%safeguard%')->get();
        $this->documents = Document::where('tags', 'like', '%safeguard%')->get();

        $this->courses = LmsCourse::where('is_live', 1)
            ->where('category_id', 19)
            ->get();

        return $this->renderPage('Safeguard', 'app.dashboard.safeguard');
    }
}