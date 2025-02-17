<?php

namespace App\Controllers\Api;

/**
 * LabUsageController
 * It receives data from the clients, processes it, and periodically sends it to the server.
 * 
 * It includes the following functionalities:
 * - pull: Receives data from clients.
 * - push: Sends data to the server.
 * - config: Checks if the configuration file exists.
 * 
 * Keys and Indexes:
 * - labUsage: 'device_name', 'device_state', 'start_time'
 * - labUsageApps: 'device_name', 'app_name', 'start_time'
 * - labUsageWeb: 'device_name', 'address', 'start_time'
 * 
 * @package App\Controllers\Api
 * @author Abdulbasit Rubeya
 * @version 1.0
 */


use App\Controllers\Controller;

use App\Models\LabUsage;
use App\Models\LabUsageApps;
use App\Models\LabUsageWeb;
use App\Models\Setting;

class LabUsageController extends Controller
{
    private $schoolData;

    private $configFile = 'storage/app/private/base/config';

    public function __construct()
    {
        parent::__construct();
        $this->schoolData = Setting::school()->toArray();
    }

    /**
     * Receives data from clients
     * 
     * TODO: Remove backward compatibility by Q1 2026
     *  - generic file names i.e file1, file2, file3
     *  - non-client processed data
     * 
     * @return void 
     */
    public function pull()
    {
        try {
            $usageFiles = [
                'web' => request()->params('document') ?? request()->params('file3'),
                'computer' => request()->params('computer') ?? request()->params('file2'),
                'application' => request()->params('application') ?? request()->params('file1'),
            ];

            if(in_array('', $usageFiles)) {
                return response()->json([
                    'status' => false,
                    'message' => 'Some files are missing',
                ], 400);
            }

            $webData = json_decode(file_get_contents($usageFiles['web']['tmp_name']), true);
            $computerData = json_decode(file_get_contents($usageFiles['computer']['tmp_name']), true);
            $applicationData = json_decode(file_get_contents($usageFiles['application']['tmp_name']), true);

            file_put_contents('dump.json', json_encode($computerData, JSON_PRETTY_PRINT));
            
            # TODO: backward compatibility with previous client versions
            if(!isset($computerData[0]->device_name)) {
                
            }

            # insert data, on dubplicate update end_time, duration
            LabUsage::safeInsert($computerData);
            LabUsageWeb::safeInsert($webData);
            LabUsageApps::safeInsert($applicationData);

            return response()->json([
                'status' => true,
                'message' => 'Data received successfully',
            ]);
        }

        catch(\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    public function push()
    {

    }

    public function config()
    {
        try{
            # check if the configuration file exists, if not create it
            if (!file_exists($this->configFile)) file_put_contents($this->configFile, 0);

            # get the configuration file and check if the school details are set
            $config = (int) file_get_contents($this->configFile);
            if(in_array('', $this->schoolData)) {
                return response()->json([
                    'status' => false,
                    'message' => 'School details are not set',
                ], 400);
            }

            # build an config id
            $this->schoolData = array_map(function($value) {
                return str_replace(' ', '', $value); }, $this->schoolData);

            file_put_contents($this->configFile, $config+1);
            $configId = strtoupper(
                substr($this->schoolData['school_country'], 0, 3) . '-' .
                substr($this->schoolData['school_region'], 0, 3) . '-' .
                substr($this->schoolData['school_name'], 0, 3) . '-' .
                str_pad($config+1, 3, '0', STR_PAD_LEFT)
            );

            if(strlen($configId) > 15 || strlen($configId) < 12) {
                return response()->json([
                    'status' => false,
                    'message' => 'Could not generate a valid config id',
                ], 400);
            }

            return response()->json([
                'status' => true,
                'message' => 'Config id generated successfully',
                'data' => $configId,
            ]);
        }

        catch(\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
            ], 500);
        }
                                
    }

    public static function routes()
    {
        app()->get('push', 'LabUsageController@push');
        app()->get('config', 'LabUsageController@config');

        app()->post('pull', 'LabUsageController@pull');
    }
}