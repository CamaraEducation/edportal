<?php

namespace App\Controllers;

use App\Models\Module;
use App\Models\Setting;
use App\Models\Role;

class Controller extends \Leaf\Controller
{

    protected $data;
    protected $permission;
    protected $isAdmin = false;

    public function __construct()
    {
        $this->data = new \stdClass();
        $this->inializeRegistras();

        // application constants
        if(!defined('modules')) define('modules', $this->data->modules ?? null);
        if(!defined('settings')) define('settings', $this->data->settings ?? null);

        $this->active = null;
        $this->sidebar = true;
        $this->menuLink = null;

    }

    public function __set($name, $value)
    {
        $this->data->$name = $value;
    }

    public function checkIfAdmin()
    {
        $admins = Role::admins();
        $this->isAdmin = in_array(auth()->user()['role'], $admins);
    }

    protected function renderPage($title, $view)
    {
        $this->title = $title;
        return render($view, $this->data);
    }

    protected function errorPage($code)
    {
        return response()->markup(view("errors.$code"), $code);
    }

    protected function render404()
    {
        return render('errors.404');
    }

    protected function jsonResponse($state, $successMsg, $errorMsg, $redirect = null)
    {
        if ($state) {
            $this->status = true;
            $this->message = $successMsg;
            $this->redirect = $redirect;
        } else {
            $this->status = false;
            $this->message = $errorMsg;
        }
        return response()->json($this->data);
    }

    protected function jsonError($message, $code = 200)
    {
        $this->status = false;
        $this->message = $message;
        return response()->json($this->data, $code);
    }

    protected function jsonSuccess($message)
    {
        $this->status = true;
        $this->message = $message;
        return response()->json($this->data);
    }

    protected function jsonException($e)
    {
        $this->status = false;
        $this->message = "An unexpected error occurred";

        if (_env('APP_DEBUG') != 'false') {
            $this->debug = [
                'message' => $e->getMessage(),
                'line' => $e->getLine(),
                'file' => $e->getFile(),
                'trace' => $e->getTraceAsString()
            ];
        }

        return response()->json($this->data);
    }

    protected function inializeRegistras(){
        $methods = get_class_methods($this);
        foreach($methods as $method){
            if(strpos($method, 'registerInstance') !== false && !request()->isAjax()){ //&& is_null(request()->params('instantiate'))){
                $this->$method();
            }
        }
    }

    /*
    |--------------------------------------------------------------------------
    | Instance Registrars
    |--------------------------------------------------------------------------
    */
    protected function registerInstanceLoggedUser()
    {
        $user = auth()->user();
        unset($user['password']);
        $this->loggedUser = (object) $user;
    }


    protected function registerInstanceDate()
    {
        # $this->date = new \Carbon\Carbon;
    }

    protected function registerInstanceHelpers()
    {
        if(isset($this->helpers)) return;
        $this->helpers = new \App\Helpers\Helpers;
    }

    protected function registerInstanceHandler()
    {
        if(isset($this->handler)) return;
        $this->handler = new \App\Middleware\Handler;
    }

    protected function registerInstanceLangs()
    {
        if(isset($this->langs)) return;
        $this->langs = new \App\Models\Language;
    }

    protected function registerInstanceAnnouncement()
    {
        if(isset($this->announcement)) return;
        $this->announcement = new \App\Models\Announcement;
    }

    protected function registerInstanceNotifications()
    {
        if(isset($this->notifications)) return;
        $this->notifications = new \App\Models\Notification;
    }

    protected function registerInstanceModules()
    {
        if(isset($this->modules)) return;
        $this->modules = (object) Module::all()->pluck('status', 'name')->toArray();
    }

    protected function registerInstanceSettings()
    {
        if(isset($this->settings)) return;
        $this->settings = (object) Setting::all()->pluck('value', 'key')->toArray();
    }
}