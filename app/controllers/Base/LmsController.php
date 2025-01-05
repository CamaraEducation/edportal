<?php

namespace App\Controllers\Base;

use App\Controllers\Controller;

use App\Models\LmsCourse;
use App\Models\LmsLesson;
use App\Models\ContentCategory;

class LmsController extends Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $this->courses = LmsCourse::where('is_live', 1)->get();
        
        return $this->renderPage('Courses', 'app.lms.index');
    }

    public function show($courseId)
    {
        $course = LmsCourse::find($courseId);
        if(!$course) return $this->render404();

        $this->active = 'courses';
        $this->menuLink = 'lms';

        $this->course = $course;
        $this->categories = ContentCategory::all();
        return $this->renderPage($course->title, 'app.lms.course.show');
    }

    public function myCourses()
    {
        $this->courses = LmsCourse::myCourses();
        return $this->renderPage("My Courses", 'app.lms.course.my');
    }

    public function create()
    {
        $this->active = 'my-courses';
        $this->menuLink = 'lms';

        $this->categories = ContentCategory::all();
        return $this->renderPage("Create Course", 'app.lms.course.add');
    }

    public function store()
    {
        try{
            $data = [
                'title' => request()->params('course-title'),
                'description' => request()->params('course-description'),
                'category_id' => request()->params('course-category'),
                'author' => auth()->id(),
                'cover' => (function(){                
                    $file = request()->uploadAs('course-cover', StoragePath('app/public/lms/covers'), uniqid(), [
                        'extensions' => ['jpg', 'jpeg', 'png']
                    ]);

                    if(!$file) return $this->jsonError('Invalid file format');
                    return str_replace(StoragePath('app/public'), '', $file['path']);
                })()
            ];

            if(in_array(null, $data)) return $this->jsonError('All fields are required');
            
            $course = LmsCourse::create($data);
            $this->redirect = route('courses.show', $course->id);

            return $this->jsonSuccess('Course created successfully');                        
        }

        catch(\Exception $e){
            return $this->jsonException($e);
        }
    }

    public function edit($courseId)
    {
        $this->course = LmsCourse::find($courseId);
        $this->categories = ContentCategory::all();
        return $this->renderPage("Edit Course", 'app.lms.course.edit');
    }

    public function lesson($lessonId)
    {
        $lesson = LmsLesson::with('course')->find($lessonId);
        if(!$lesson) return $this->render404();

        $this->active = 'courses';
        $this->menuLink = 'lms';
        $this->sidebar = false;

        $this->lesson = $lesson;
        $this->lessons = $lesson->course->lessons;

        // check if file $lesson->content exists
        if(file_exists($lesson->content)){
            $this->content = file_get_contents($lesson->content);
        }

        return $this->renderPage($lesson->course->title, 'app.lms.lesson.show');
    }

    public function addLesson(){

        # TODO: see what causes the request body to malform
        $request = $this->extractData(request()->body());

        $courseId = $request['course_id'];
        $course = LmsCourse::find($courseId);
        if(!$course) return $this->jsonError('Course not found');

        try{
            $contentFile = StoragePath('app/private/lms/lessons/'.uniqid().'.html');

            $initialContent = "# {$request['lesson-title']}\n\n{$request['lesson-description']}";
            file_put_contents($contentFile, $initialContent);

            # check if file exists
            if(!file_exists($contentFile)) return $this->jsonError('Failed to generate lesson content file');

            $data = [
                'title' => $request['lesson-title'],
                'description' => $request['lesson-description'],
                'arrangement' => $this->lastIndexInArrangement($courseId),
                'course_id' => $courseId,
                'content' => $contentFile,
            ];

            if(in_array(null, $data)) return $this->jsonError('All fields are required');
            $lesson = LmsLesson::create($data);

            if(!$lesson) return $this->jsonError('Failed to create lesson');
            
            $this->redirect = route('lessons.edit', $lesson->id);
            return $this->jsonSuccess('Lesson created successfully');
        }

        catch(\Exception $e){
            return $this->jsonException($e);
        }
    }

    # edit lesson
    public function editLesson($lessonId)
    {
        $lesson = LmsLesson::with('course')->find($lessonId);
        if(!$lesson) return $this->render404();

        $this->active = 'courses';
        $this->menuLink = 'lms';
        //$this->sidebar = false;

        $this->lesson = $lesson;
        $this->lessons = $lesson->course->lessons;

        // check if file $lesson->content exists
        if(file_exists($lesson->content)){
            $this->lessonContent = file_get_contents($lesson->content);
        }else{
            $this->lessonContent = "# {$lesson->title}\n\n{$lesson->description}";
        }

        return $this->renderPage($lesson->course->title, 'app.lms.lesson.edit');
    }

    # save lesson
    public function saveLesson($lessonId)
    {
        $lesson = LmsLesson::find($lessonId);
        if(!$lesson) return $this->jsonError('Lesson not found');

        $content = request()->params('content');
        $content = sanitizeHtml(html_entity_decode($content));


        // if(!file_exists($lesson->content)) return $this->jsonError('Lesson content file not found');
        file_put_contents($lesson->content, $content);

        $lesson->title = request()->params('title', $lesson->title);
        $lesson->save();

        return $this->jsonSuccess('Lesson saved successfully');
    }

    # update course
    public function updateCourse($courseId)
    {
        $course = LmsCourse::find($courseId);
        if(!$course) return $this->jsonError('Course not found');

        // validate access
        if($course->author != auth()->id() || auth()->user()['role'] != 'admin')
            return $this->jsonError('You are not authorized to edit this course');

        /*$course->title = request()->params('title', $course->title);
        $course->description = request()->params('description', $course->description);
        $course->category_id = request()->params('category_id', $course->category_id);
        $course->save();*/

        $request = $this->extractData(request()->body());

        $course->title = $request['title'] ?? $course->title;
        $course->description = $request['description'] ?? $course->description;
        $course->category_id = $request['category_id'] ?? $course->category_id;

        if(auth()->user()['role'] == 'admin'){
            $course->is_featured = $request['is_featured'] ?? $course->is_featured;
        }

        $course->save();

        return $this->jsonSuccess('Course updated successfully');
    }

    # update course status
    public function updateCourseStatus($courseId)
    {
        $course = LmsCourse::find($courseId);
        if(!$course) return $this->jsonError('Course not found');

        $course->is_live = !$course->is_live;
        $course->save();

        return $this->jsonSuccess('Course status updated successfully');
    }

    # delete lesson
    public function deleteLesson($lessonId)
    {
        $lesson = LmsLesson::find($lessonId);
        if(!$lesson) return $this->jsonError('Lesson not found');

        if(file_exists($lesson->content)) unlink($lesson->content);
        $lesson->delete();

        return $this->jsonSuccess('Lesson deleted successfully');
    }

    # deal with request abnormalities
    protected function extractData($data) {

        if(is_null($data)) return null;
        
        if (is_array($data) && count($data) > 0) {
            parse_str(html_entity_decode($data[0]), $result);
            return $result;
        }
        
        return null;
    }

    protected function lastIndexInArrangement($courseId)
    {
        $lesson = LmsLesson::where('course_id', $courseId)->orderBy('arrangement', 'desc')->first();
        return $lesson ? $lesson->arrangement+1 : 1;
    }

    public static function routes()
    {
        app()->get('/courses', ['name'=>'courses.index', 'LmsController@index']);
        app()->get('/courses/my', ['name'=>'courses.mine', 'LmsController@myCourses']);
        app()->get('/courses/add', ['name'=>'courses.create', 'LmsController@create']);
        
        app()->get('/courses/show/{id}', ['name'=>'courses.show', 'LmsController@show']);
        app()->get('/courses/edit/{id}', ['name'=>'courses.edit', 'LmsController@edit']);
        app()->get('/courses/status/{id}', ['name'=>'courses.status', 'LmsController@updateCourseStatus']);

        app()->get('/lessons/show/{id}', ['name'=>'lessons.show', 'LmsController@lesson']);
        app()->get('/lessons/edit/{id}', ['name'=>'lessons.edit', 'LmsController@editLesson']);
        app()->get('/lessons/delete/{id}', ['name'=>'lessons.delete', 'LmsController@deleteLesson']);

        app()->post('/courses/add', ['name'=>'courses.store', 'LmsController@store']);
        app()->post('/courses/update/{id}', ['name'=>'courses.update', 'LmsController@updateCourse']);
        app()->post('/lessons/add', ['name'=>'lessons.store', 'LmsController@addLesson']);
        app()->post('/lessons/save/{id}', ['name'=>'lessons.save', 'LmsController@saveLesson']);
    }
}