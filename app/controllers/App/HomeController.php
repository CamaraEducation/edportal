<?php

namespace App\Controllers\App;

use App\Controllers\Controller;

use App\Models\Video;
use App\Models\Document;
use App\Models\Slide;
// use App\Models\Notes;

class HomeController extends Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function home(){

        $this->data->title = 'Dashboard';
        $this->contentStats = $this->portalStats();

        render('app.dashboard.home', $this->data);
        //dd($this->data);
        // render('welcome');
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
            'slides' => [
                'icon' => 'ph-cards text-info',
                'total' => Slide::count()
            ],
            'notes' => [
                'icon' => 'ph-pencil-circle text-danger',
                'total' => 0
            ]
        ];
    }

    public function start(){ 
        $this->data->title = 'Start';
        $this->data->current_user = auth()->user();

        render('app.start', $this->data);
    }
}