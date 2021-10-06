<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBoxLogTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('box_log', function (Blueprint $table) {
            $table->increments('id');

            $table->unsignedInteger('box_id');
            $table->date('date')->index();
            $table->boolean('action_type')->index();
            $table->unsignedInteger('count')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('box_log');
    }
}
