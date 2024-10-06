<?php

use Leaf\Schema;
use Leaf\Database;
use Illuminate\Database\Schema\Blueprint;

class CreateLabUsage extends Database
{
    /**
     * Run the migrations.
     * @return void
     */
    public function up()
    {
        if (!static::$capsule::schema()->hasTable('lab_usage')) :
            static::$capsule::schema()->create('lab_usage', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string('device_name', 50);
                $table->text('device_state');
                $table->dateTime('start_time');
                $table->dateTime('end_time');
                $table->double('duration', 15, 8)->default(0);
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
        static::$capsule::schema()->dropIfExists('lab_usages');
    }
}
