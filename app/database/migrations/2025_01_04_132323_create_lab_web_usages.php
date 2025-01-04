<?php

use Leaf\Schema;
use Leaf\Database;
use Illuminate\Database\Schema\Blueprint;

class CreateLabWebUsages extends Database
{
    /**
     * Run the migrations.
     * @return void
     */
    public function up()
    {
        if (!static::$capsule::schema()->hasTable('lab_usage_web')) :
            static::$capsule::schema()->create('lab_usage_web', function (Blueprint $table) {
                $table->increments('id');
                $table->string('device_name', 50);
                $table->text('address');
                $table->timestamp('start_time');
                $table->timestamp('end_time');
                $table->integer('duration')->default(0);
                $table->timestamp('created_at')->useCurrent();
                $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();

                # keys and indexes
                $table->unique(['device_name', 'address', 'start_time']);
            });
        endif;
    }

    /**
     * Reverse the migrations.
     * @return void
     */
    public function down()
    {
        static::$capsule::schema()->dropIfExists('lab_usage_web');
    }
}
