<?php

namespace App\Controllers\Base;
use App\Controllers\Controller;

class WhiteboardController extends Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->active = "whiteboard";
        $this->title = "Whiteboard";

        $this->asset = null;
    }

    public function index()
    {
        $this->dir = route('whiteboard.dispatch');
        $this->name = request()->params('name') ?? 'start';

        # TODO: Create a new whiteboard and reassign the name

        render('app.whiteboard.show', $this->data);
    }

    public function dispatch()
    {
        // return response()->json($_REQUEST);
        $this->secondaryDispatch();
    }

    public function secondaryDispatch()
    {
        $action = request()->params('do');

        switch($action):
            case 'get': $this->fetchBoard(); break;
        endswitch;
    }

    public function fetchBoard(){
        $board = request()->params('board');

        if($board == 'start')
            return response()->plain('{"library":"","scene":{"type":"","ext":"","content":""}}');

        return response()->plain('{"library":"","scene":{"type":"","ext":"","content":""}}');      
    }

    public static function routes()
    {
        app()->get('/show', ['name'=>'whiteboard', 'WhiteboardController@index']);
        app()->post('/dispatch', ['name'=>'whiteboard.dispatch', 'WhiteboardController@dispatch']);
    }
}
