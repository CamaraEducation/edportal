<?php

namespace App\Models;

class Video extends Model
{
    protected $table = 'videos';
    protected $fillable = ['title', 'description', 'thumbnail', 'source', 'tags', 'duration', 'keynotes', 'views', 'author'];

    protected $with = ['user'];
    public $timekeynotes = true;
    protected $casts = [
        'keynotes' => 'json',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    protected $attributes = [
        'views' => 0,
        'keynotes' => "[]"
    ];

    public static function search($keyword, $limit = 24){
        return self::where('title', 'like', '%'.$keyword.'%')
            ->orWhere('description', 'like', '%'.$keyword.'%')
            ->orWhere('tags', 'like', '%'.$keyword.'%')
            ->inRandomOrder()
            ->take($limit)
            ->get();
    }

    public static function viewed($videoId, $userId){
        $contentActivity = ContentActivity::record($userId, $videoId, 'video');
        
        if($contentActivity->wasRecentlyCreated || $contentActivity->updated_at->diffInDays(now()) > 0){
            $video = self::find($videoId);
            $video->views += 1;
            $video->save();
        }
    }

    public static function bookmark($videoId, $userId){
        return ContentActivity::record($userId, $videoId, 'video', true);
    }

    public static function unbookmark($videoId, $userId){
        return ContentActivity::record($userId, $videoId, 'video', false);
    }
    
    # belongs to user
    public function user()
    {
        return $this->belongsTo(User::class, 'author');
    }
}