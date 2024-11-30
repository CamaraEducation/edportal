<?php

use Leaf\Schema;
use Leaf\Database;
use Illuminate\Database\Schema\Blueprint;

class CreateLmsLessons extends Database
{
    /**
     * Run the migrations.
     * @return void
     */
    public function up()
    {
        if (!static::$capsule::schema()->hasTable('lms_lessons')) :
            static::$capsule::schema()->create('lms_lessons', function (Blueprint $table) {
                $table->increments('id');
                $table->string('title', 150);
                $table->string('content', 150);
                $table->string('description', 300)->nullable();
                $table->integer('is_quiz')->default(0);
                $table->integer('arrangement');
                $table->integer('course_id');
                $table->timestamp('created_at')->useCurrent();
                $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
            });
        endif;
    }

    /**
     * Reverse the migrations.
     * @return void
     */
    public function down()
    {
        static::$capsule::schema()->dropIfExists('lms_lessons');
    }
}
