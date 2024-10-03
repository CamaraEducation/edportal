<?php

use Leaf\Schema;
use Leaf\Database;
use Illuminate\Database\Schema\Blueprint;

class CreateVideos extends Database
{
    /**
     * Run the migrations.
     * @return void
     */
    public function up()
    {
        if (!static::$capsule::schema()->hasTable('videos')) :
            static::$capsule::schema()->create('videos', function (Blueprint $table) {
                $table->increments('id');
                $table->string('title', 100)->default('');
                $table->text('description');
                $table->text('thumbnail');
                $table->text('source');
                $table->text('tags')->nullable();
                $table->integer('time')->default(0);
                $table->json('timestamps')->nullable();
                $table->integer('author')->default(1);
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
        static::$capsule::schema()->dropIfExists('videos');
    }
}
