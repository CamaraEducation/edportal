<?php

namespace App\Models;

class Notes extends Model
{
    protected $table = 'notes';
    protected $fillable = ['title', 'description', 'source', 'draft', 'author', 'is_public', 'shared_to', 'tags'];
    protected $with = ['author'];

    public $timestamps = true;
    protected $casts =[
        'shared_to' => 'json',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    protected $attributes = [
        'is_public' => 0,
        'shared_to' => '[]'
    ];

    # belongs to author
    public function author()
    {
        return $this->belongsTo(User::class, 'author');
    }
}