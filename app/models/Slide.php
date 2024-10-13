<?php

namespace App\Models;

class Slide extends Model
{
    protected $table = 'slides';
    protected $fillable = ['title', 'description', 'source', 'author', 'tags', 'is_public'];
    public $timestamps = true;
    protected $with = ['user'];
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    # belongs to user
    public function user()
    {
        return $this->belongsTo(User::class, 'author');
    }
}