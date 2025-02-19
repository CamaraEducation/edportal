<?php

namespace App\Controllers\Base;

use App\Models\Notification;
use App\Controllers\Controller;

class NotificationsController extends Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function userNotifications(){
        return Notification::user(auth()->id());
    }
    
}