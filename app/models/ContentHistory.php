<?php

namespace App\Models;

class ContentHistory extends Model
{
    protected $table = 'content_history';
    protected $fillable = ['user_id', 'tag_history'];
    public $timestamps = true;
    protected $with = ['user'];
    protected $casts = [
        'tag_history' => 'json',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    # belongs to user
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}