<?php

use Leaf\Schema;
use Leaf\Database;
use Illuminate\Database\Schema\Blueprint;

class CreateDocuments extends Database
{
    /**
     * Run the migrations.
     * @return void
     */
    public function up()
    {
        if (!static::$capsule::schema()->hasTable('documents')) :
            static::$capsule::schema()->create('documents', function (Blueprint $table) {
                $table->increments('id');
                $table->string('name', 150);
                $table->text('description')->nullable();
                $table->string('source', 150);
                $table->text('tags');
                $table->integer('author');
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
        static::$capsule::schema()->dropIfExists('documents');
    }
}
