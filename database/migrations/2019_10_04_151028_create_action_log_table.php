<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateActionLogTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('action_log', function (Blueprint $table) {
            $table->increments('id');

            $table->date('date')->index();
            $table->boolean('income')->index();
            $table->unsignedInteger('product_id')->index();
            $table->unsignedInteger('count')->nullable();
            $table->string('partition')->nullable();
            $table->unsignedInteger('customer_id')->nullable();
            $table->unsignedInteger('created_by')->index();
            $table->text('description')->nullable();

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
        Schema::dropIfExists('action_log');
    }
}
