<?php

namespace App\Controllers\Hooks;

use App\Models\LabUsageWeb;
use App\Models\LabUsageApps;
use App\Models\LabUsage;

use App\Services\Fetch;

use App\Models\Setting;

class SyncController
{
    private $schoolData;

    public function __construct()
    {
       $this->verifySchoolDetails();
    }

    public function general()
    {
        $usage = LabUsage::fullClientsMonthlyUsage();

        $url = PortalConfig('live_hub') . 'sync/usage/general';
        $data = Fetch::post($url, [ 'body' => [
            'schoolId' => $this->schoolData['school_id'],
            'data' => json_encode($usage)
        ]]);

        response()->plain($data['body']);
    }

    public function verifySchoolDetails()
    {
        $this->schoolData = Setting::school()->toArray();
        if(in_array('', $this->schoolData)){
            response()->json(['message' => 'Please update your school details'], 400);
            die();
        }
    }

    public static function routes()
    {
        app()::group('usage', function() {
            app()::get('general', 'SyncController@general');
            app()::get('browser', 'SyncController@browser');
            app()::get('application', 'SyncController@applications');
        });
    }
}