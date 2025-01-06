<?php

namespace App\Models;

class Document extends Model
{
    protected $table = 'documents';
    protected $fillable = ['name', 'description', 'source', 'tags', 'author'];
    public $timestamps = true;
    protected $with = ['user'];
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    # random order
    public static function search($keyword, $limit = 24){
        return self::where('name', 'like', '%'.$keyword.'%')
            ->orWhere('description', 'like', '%'.$keyword.'%')
            ->orWhere('tags', 'like', '%'.$keyword.'%')
            ->inRandomOrder()
            ->take($limit)
            ->get();
    }

    # viewed
    public static function viewed($documentId, $userId){
        $contentActivity = ContentActivity::record($userId, $documentId, 'document');
        
        if($contentActivity->wasRecentlyCreated || $contentActivity->updated_at->diffInDays(now()) > 0){
            $document = self::find($documentId);
            $document->views += 1;
            $document->save();
        }
    }

    # bookmark
    public static function bookmark($documentId, $userId, $state=true){
        return ContentActivity::record($userId, $documentId, 'document', $state);
    }

    # belongs to user
    public function user()
    {
        return $this->belongsTo(User::class, 'author');
    }

    # has single user contentActivity per document
    public function user_activity()
    {
        return $this->hasOne(ContentActivity::class, 'content_id')
            ->where('content_type', 'document')
            ->where('user_id', auth()->id());
    }
}