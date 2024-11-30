<?php

namespace App\Models;

class ContentActivity extends Model
{
    protected $primaryKey = null;
    public $incrementing = false;
    
    protected $table = 'content_activity';
    protected $fillable = ['user_id', 'content_id', 'content_type', 'bookmarked'];
    public $timestamps = true;
    protected $with = ['user'];
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    public static function record($userId, $contentId, $contentType, $bookmarked = false)
    {
        $contentActivity = self::where('user_id', $userId)
            ->where('content_id', $contentId)
            ->where('content_type', $contentType)
            ->first();
    
        if ($contentActivity) {
            
            ContentActivity::where('user_id', $userId)
                ->where('content_id', $contentId)
                ->where('content_type', $contentType)
                ->update([
                    'bookmarked' => $bookmarked,
                    'updated_at' => now()
                ]);
    
            // Return the activity (refreshing if necessary)
            return $contentActivity->fresh();
        } else {
            
            return self::create([
                'user_id' => $userId,
                'content_id' => $contentId,
                'content_type' => $contentType,
                'bookmarked' => $bookmarked
            ]);
        }
    }

    public static function fetch($userId, $contentType, $limit=16) :object
    {
        return self::with($contentType)->where('user_id', $userId)
            ->where('content_type', $contentType)
            ->orderBy('updated_at', 'desc')
            ->limit($limit)
            ->get();
    }

    public static function bookmarks($userId, $contentType, $limit=16) :object
    {
        return self::with($contentType)->where('user_id', $userId)
            ->where('content_type', $contentType)
            ->where('bookmarked', true)
            ->orderBy('updated_at', 'desc')
            ->limit($limit)
            ->get();
    }

    # belongs to user
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    # belongs to video
    public function video()
    {
        return $this->belongsTo(Video::class, 'content_id');
    }

    # belongs to slide
    public function slide()
    {
        return $this->belongsTo(Slide::class, 'content_id');
    }

    # belongs to document
    public function document()
    {
        return $this->belongsTo(Document::class, 'content_id');
    }
}