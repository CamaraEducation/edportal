<?php

namespace App\Controllers\Base;

use App\Models\LabUsage;
use App\Models\LabSynchronization;

use Carbon\Carbon;
use App\Controllers\Controller;

class UsageController extends Controller
{
    public function  __construct()
    {
        parent::__construct();
    }

    public function general(){

        // usege format: H:i:s
        $this->statSummary = [
            'remaining' =>
                [ 'icon' => 'ph-drop-half-bottom text-primary', 'title' => 'Records', 'value' => LabSynchronization::remainingData(), 'id' => '#remainingRecords' ],
            'usageToday' =>
                [ 'icon' => 'ph-clock text-danger', 'title' => 'Today', 'value' => gmdate("H:i:s", LabUsage::usageToday() * 60) ],
            'usageThisMonth' =>
                [ 'icon' => 'ph-calendar text-warning', 'title' => 'Monthly', 'value' => gmdate("H:i:s", LabUsage::usageThisMonth() * 60) ],
            'averagePerDay' =>
                [ 'icon' => 'ph-cloud-sun text-info', 'title' => 'Client/Day (Monthly %)', 'value' => gmdate("H:i:s", ceil(LabUsage::usageThisMonth() * 60/22/25)) ],
        ];

        $this->renderPage('General Usage', 'app.usage.general');
    }

    /**
     * Client Usage Summary
     * 
     * This function returns a render of usage
     * summary for each client active time.
     * The data rendered includes
     *  - Name of the Client
     *  - Summary Usage of Active Time
     *  - Last date of synchronization
     * 
     */
    public function clientsSummary(){
        try{
            $this->clientsSummary = LabUsage::clientsSummary();
            return response()->json([
                'status' => true,
                'message' => null,
                'html' => view('app.usage.partials.clients-summary', $this->data)
            ]);
        }
        
        catch(\Exception $e){
            return $this->jsonException($e);
        }
    }

    

    /**
     * General Summary Graph
     * 
     * This function returns a render of the general
     * usage graph for the grouped in months.
     * The data rendered includes the total usage
     *  - Active Time
     *  - Idle Time
     *  - Number of Clients
     * 
     */
    public function generalSummaryGraph(){
        try{
            $this->monthlySummary = LabUsage::monthlySummary();
            return response()->json([
                'status' => true,
                'message' => null,
                'html' => view('app.usage.partials.general-summary', $this->data)
            ]);
        }
        
        catch(\Exception $e){
            return $this->jsonException($e);
        }
    }

    /**
     * General Full Graph
     * 
     * This function returns a render of the general
     * usage graph for the grouped in months.
     * The data rendered includes the total usage
     *  - Active Time
     *  - Idle Time
     *  - Number of Clients
     * 
     */

    public function generalFullGraph(){
        try{
            $this->fullUsageGraph = LabUsage::fullClientsMonthlyUsage();
            return response()->json([
                'status' => true,
                'message' => null,
                'html' => view('app.usage.partials.clients-full', $this->data)
            ]);
        }

        catch(\Exception $e){
            return $this->jsonException($e);
        }
    }
    
    public static function routes(){
        app()->get('/general', ['name'=>'general.usage', 'UsageController@general']);

        # fetch usage partials
        app()->get('/clients/summary', ['name'=>'clients.summary', 'UsageController@clientsSummary']);
        app()->get('/general/full/graph', ['name'=>'full.summary.graph', 'UsageController@generalFullGraph']);
        app()->get('/general/summary/graph', ['name'=>'general.summary.graph', 'UsageController@generalSummaryGraph']);
    }
}