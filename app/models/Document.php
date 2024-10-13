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

    # belongs to user
    public function user()
    {
        return $this->belongsTo(User::class, 'author');
    }
}