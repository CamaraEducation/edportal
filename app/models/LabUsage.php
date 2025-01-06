<?php

namespace App\Models;

use Carbon\Carbon;
use Faker\Factory as Faker;

class LabUsage extends Model
{
    protected $table = 'lab_usage';
    protected $fillable = ['device_name', 'device_state', 'start_time', 'end_time', 'duration'];
    public $timestamps = true;
    protected $casts = [
        'start_time' => 'datetime',
        'end_time' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    # usage today
    public static function usageToday() {
        return self::whereDate('start_time', Carbon::today())
            ->where('device_state', 'active')
            ->sum('duration');        
    }

    # usage this month
    public static function usageThisMonth() {
        return self::whereMonth('start_time', Carbon::now()->month)
            ->whereYear('start_time', Carbon::now()->year)
            ->where('device_state', 'active')
            ->sum('duration');
    }

    # usage this year
    public static function usageThisYear() {
        return self::whereYear('start_time', Carbon::now()->year)
            ->where('device_state', 'active')
            ->sum('duration');
    }

    # clients usage summary
    public static function clientsSummary() {
        return self::where('device_state', 'active')
            ->whereYear('created_at', Carbon::now()->year)
            ->selectRaw('device_name, sum(duration) as total_duration, MAX(created_at) as latest_created_at')
            ->groupBy('device_name')
            ->orderBy('device_name', 'asc')
            ->orderBy('latest_created_at', 'desc')
            ->get()
            ->map(function ($client) {
                $client->latest_created_at = Carbon::parse($client->latest_created_at); // Convert to Carbon instance
                return $client;
            });
    }


    # monthly usage summary
    public static function monthlySummary() {
        // Get all months for the current year
        $months = collect(range(1, 12))->map(function ($month) {
            return Carbon::createFromDate(null, $month, 1)->format('Y-m');
        });
    
        // Fetch stats from the database
        $stats = self::whereYear('created_at', Carbon::now()->year)
            ->selectRaw('
                DATE_FORMAT(start_time, "%Y-%m") as month, 
                COUNT(DISTINCT device_name) as number_of_clients,
                SUM(CASE WHEN device_state = "active" THEN duration ELSE 0 END) as total_active_time,
                SUM(CASE WHEN device_state = "away" THEN duration ELSE 0 END) as total_idle_time
            ')
            ->groupBy('month')
            ->orderBy('month', 'asc')
            ->get()
            ->keyBy('month'); // Key results by month for easy lookup
    
        // Map over all months, set stats to 0 if no data available for a month
        return $months->map(function ($month) use ($stats) {
            return (object) [
                'month' => Carbon::createFromFormat('Y-m', $month)->format('M'),
                'number_of_clients' => $stats->has($month) ? $stats[$month]->number_of_clients : 0,
                'total_active_time' => $stats->has($month) ? round($stats[$month]->total_active_time/60) : 0,
                'total_idle_time' => $stats->has($month) ? round($stats[$month]->total_idle_time/60) : 0,
            ];
        });
    }    

    
    # full clients monthly usage
    public static function fullClientsMonthlyUsage() {
        // Get all months for the current year
        $months = collect(range(1, 12))->map(function ($month) {
            return Carbon::createFromDate(null, $month, 1)->format('Y-m');
        });
    
        // Fetch stats from the database
        $stats = self::whereYear('start_time', Carbon::now()->year)
            ->selectRaw('
                DATE_FORMAT(start_time, "%Y-%m") as month, 
                device_name,
                SUM(CASE WHEN device_state = "active" THEN duration ELSE 0 END) as total_active_time,
                SUM(CASE WHEN device_state = "away" THEN duration ELSE 0 END) as total_idle_time
            ')
            ->groupBy('month', 'device_name')
            ->orderBy('device_name', 'asc')
            ->orderBy('month', 'asc')
            ->get()
            ->groupBy('device_name'); // Group results by device_name
    
        // Initialize the final clients data structure
        $clients = [];
    
        foreach ($stats as $deviceName => $deviceStats) {
            // Create a map for the device stats keyed by month
            $deviceMonthStats = $deviceStats->keyBy('month');
    
            // Map over all months and ensure each month has a stat entry
            $clients[$deviceName] = $months->mapWithKeys(function ($month) use ($deviceMonthStats) {
                return [
                    Carbon::createFromFormat('Y-m', $month)->format('M') => (object) [
                        'total_active_time' => $deviceMonthStats->has($month) ? $deviceMonthStats[$month]->total_active_time : 0,
                        'total_idle_time' => $deviceMonthStats->has($month) ? $deviceMonthStats[$month]->total_idle_time : 0,
                    ]
                ];
            });
        }
    
        return $clients;
    }
    

    public static function usageFaker(int $year, int $noClients, int $noRecords = 1000)
    {  exit;
        $faker = Faker::create();
        $usages = [];

        for ($i = 0; $i < $noRecords; $i++) {
            // Random client
            $deviceNumber = str_pad(mt_rand(1, $noClients), 3, '0', STR_PAD_LEFT);
            $deviceName = "TZ-DAR-UHA-{$deviceNumber}";

            // Random time within the specified year
            $startTime = Carbon::create($year, rand(1, 12), rand(1, 28), rand(0, 23), rand(0, 59));
            $endTime = (clone $startTime)->addSecond(rand(20, 300));

            // Calculate duration (in minutes)
            $duration = $endTime->diffInSeconds($startTime);

            // Random state (active or away)
            $deviceState = $faker->randomElement(['active', 'away']);

            $usages[] = [
                'device_name' => $deviceName,
                'device_state' => $deviceState,
                'start_time' => $startTime,
                'end_time' => $endTime,
                'duration' => $duration
            ];
        }

        self::insert($usages);
    }

    # safe insert
    public static function safeInsert($data)
    {
        return self::upsert($data,
            ['device_name', 'device_state', 'start_time'],
            ['end_time', 'duration']
        );
    }

    
}