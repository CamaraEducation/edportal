<?php

namespace App\Controllers\Admin;

use App\Controllers\Controller;
use App\Models\Setting;

use App\Services\Fetch;

class SchoolController extends Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function setup()
    {
        $this->school = Setting::school();
        return render('admin.settings.school', $this->data);
    }

    public function verify()
    {
        try{
            $schoolId = request()->params('school_id');
            if(!$schoolId) return $this->jsonError('School ID is required');

            $url = PortalConfig('live_hub') . "schools/fetch/$schoolId";
            $response = json_decode(Fetch::get($url)['body']);

            if(!$response->status)
                return $this->jsonError($response->message);

            // update school details from settings
            $school = $response->school;
            Setting::updateSchool([
                'school_id' => $schoolId,
                'school_name' => $school->name,
                'school_level' => $school->level,
                'school_type' => $school->type,
                'school_region' => $school->region,
                'school_country' => $school->country,
            ]);

            $this->redirect =route('school.setup');
            return $this->jsonSuccess('School details updated successfully');
        }

        catch(\Exception $e){
            return $this->jsonException($e);
        }
    }

    public function update()
    {
        try{

        }

        catch(\Exception $e){
            return $this->jsonException($e);
        }
    }

    public static function  routes() {
        app()->get('', ['name'=>'school.setup', 'SchoolController@setup']);

        app()->post('verify', ['name'=>'school.verify', 'SchoolController@verify']);
    }
}