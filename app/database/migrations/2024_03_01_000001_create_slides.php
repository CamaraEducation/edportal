<?php

use Leaf\Schema;
use Leaf\Database;
use Illuminate\Database\Schema\Blueprint;

class CreateSlides extends Database
{
    /**
     * Run the migrations.
     * @return void
     */
    public function up()
    {
        if (!static::$capsule::schema()->hasTable('slides')) :
            static::$capsule::schema()->create('slides', function (Blueprint $table) {
                $table->increments('id');
                $table->string('title', 50);
                $table->string('description', 50)->nullable();
                $table->text('source');
                $table->integer('author');
                $table->integer('is_public')->default(0);
                $table->text('tags')->nullable();
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
        static::$capsule::schema()->dropIfExists('slides');
    }
}
