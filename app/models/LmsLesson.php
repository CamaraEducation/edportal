<?php

namespace App\Models;

class LmsLesson extends Model
{
    protected $table = 'lms_lessons';
    protected $fillable = ['title', 'content', 'description', 'is_quiz', 'arrangement', 'course_id'];
    
    public $timestamps = true;
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    # belongs to course
    public function course()
    {
        return $this->belongsTo(LmsCourse::class, 'course_id');
    }
}