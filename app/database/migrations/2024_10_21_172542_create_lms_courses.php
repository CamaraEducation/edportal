<?php

use Leaf\Schema;
use Leaf\Database;
use Illuminate\Database\Schema\Blueprint;

class CreateLmsCourses extends Database
{
    /**
     * Run the migrations.
     * @return void
     */
    public function up()
    {
        if (!static::$capsule::schema()->hasTable('lms_courses')) :
            static::$capsule::schema()->create('lms_courses', function (Blueprint $table) {
                $table->increments('id');
                $table->string('title', 150);
                $table->string('description', 300)->nullable();
                $table->integer('author');
                $table->string('cover');
                $table->integer('category_id');
                $table->integer('is_live')->default(0);
                $table->integer('is_featured')->default(0);
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
        static::$capsule::schema()->dropIfExists('lms_courses');
    }
}
