<?php

use Leaf\Schema;
use Leaf\Database;
use Illuminate\Database\Schema\Blueprint;

class CreateLabAppsUsages extends Database
{
    /**
     * Run the migrations.
     * @return void
     */
    public function up()
    {
        if (!static::$capsule::schema()->hasTable('lab_usage_apps')) :
            static::$capsule::schema()->create('lab_usage_apps', function (Blueprint $table) {
                $table->increments('id');
                $table->string('device_name', 50);
                $table->string('app_name', 50);
                $table->timestamp('start_time');
                $table->timestamp('end_time');
                $table->integer('duration')->default(0);
                $table->timestamp('created_at')->useCurrent();
                $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();

                # keys and indexes
                $table->unique(['device_name', 'app_name', 'start_time']);
            });
        endif;
    }

    /**
     * Reverse the migrations.
     * @return void
     */
    public function down()
    {
        static::$capsule::schema()->dropIfExists('lab_usage_apps');
    }
}
