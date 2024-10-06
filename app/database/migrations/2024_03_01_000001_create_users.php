<?php

use Leaf\Schema;
use Leaf\Database;
use Illuminate\Database\Schema\Blueprint;

class CreateUsers extends Database
{
    /**
     * Run the migrations.
     * @return void
     */
    public function up()
    {
        if (!static::$capsule::schema()->hasTable('users')) :
            static::$capsule::schema()->create('users', function (Blueprint $table) {
                $table->id();
                $table->string('username', 100)->unique();
                $table->string('fullname', 100);
                $table->string('email', 100)->unique()->nullable();
                $table->string('phone', 100)->unique()->nullable();
                $table->text('password');
                $table->text('remember_token')->nullable();
                $table->char('status', 50)->nullable();
                $table->char('role', 50)->default('student');
                $table->string('avatar')->default('/assets/images/user/avatar-2.jpg');
                $table->text('about')->nullable();
                $table->int('recommend')->default(1);
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
        static::$capsule::schema()->dropIfExists('users');
    }
}
