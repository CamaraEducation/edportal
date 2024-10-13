<?php

use Leaf\Schema;
use Leaf\Database;
use Illuminate\Database\Schema\Blueprint;

class CreateContentActivities extends Database
{
    /**
     * Run the migrations.
     * @return void
     */
    public function up()
    {
        if (!static::$capsule::schema()->hasTable('content_activities')) :
            static::$capsule::schema()->create('content_activities', function (Blueprint $table) {
                $table->bigInteger('user_id')->unsigned();
                $table->bigInteger('content_id')->unsigned();
                $table->string('content_type', 50);
                $table->interger('bookmarked')->default(0);
                $table->interger('resume')->default(0);
                $table->timestamps();
                $table->unique(['user_id', 'content_id', 'content_type']);
            });
        endif;
    }

    /**
     * Reverse the migrations.
     * @return void
     */
    public function down()
    {
        static::$capsule::schema()->dropIfExists('content_activities');
    }
}
