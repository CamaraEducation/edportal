<?php

namespace App\Models;

class LmsCourse extends Model
{
    protected $table = 'lms_courses';
    protected $fillable = ['title', 'description', 'cover', 'author', 'category_id', 'is_live'];

    protected $with = ['lessons', 'category'];
    public $timestamps = true;
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    # my courses
    public static function myCourses()
    {
        return self::where('author', auth()->id())->get();
    }

    # has many lessons
    public function lessons()
    {
        return $this->hasMany(LmsLesson::class, 'course_id');
    }

    # belongs to user
    public function user()
    {
        return $this->belongsTo(User::class, 'author');
    }

    # belongs to category
    public function category()
    {
        return $this->belongsTo(ContentCategory::class, 'category_id');
    }
}