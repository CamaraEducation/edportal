<?php

namespace App\Models;

use Leaf\Database as DB;

class LabSynchronization extends Model
{
    protected $table = 'lab_synchronization';
    protected $fillable = ['key', 'value'];
    public $timestamps = true;
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    public static function remainingData(){
        return DB::$capsule::table('lab_usage as u')
            ->join('lab_synchronization as s', function($join) {
            $join->on('s.key', '=', DB::$capsule::raw("'general_usage'"))
                 ->whereColumn('u.id', '>', 's.value');
            })
            ->count('s.id');
    }

    public static function lastRecord($key){
        return self::where('key', $key)->orderBy('id', 'desc')->first();
    }
}