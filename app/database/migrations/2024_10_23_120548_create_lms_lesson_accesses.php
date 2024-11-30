<?php

use Leaf\Schema;
use Leaf\Database;
use Illuminate\Database\Schema\Blueprint;

class CreateLmsLessonAccesses extends Database
{
    /**
     * Run the migrations.
     * @return void
     */
    public function up()
    {
        if (!static::$capsule::schema()->hasTable('lms_lesson_accesses')) :
            static::$capsule::schema()->create('lms_lesson_accesses', function (Blueprint $table) {
                $table->integer('user_id');
                $table->integer('course_id');
                $table->integer('lesson_id');
                $table->timestamp('created_at')->useCurrent();
                $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
                $table->unique(['user_id', 'course_id', 'lesson_id']);
            });
        endif;
    }

    /**
     * Reverse the migrations.
     * @return void
     */
    public function down()
    {
        static::$capsule::schema()->dropIfExists('lms_lesson_accesses');
    }
}
