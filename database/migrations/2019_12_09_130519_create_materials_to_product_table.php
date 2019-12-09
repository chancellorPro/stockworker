<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMaterialsToProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('materials_to_product', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('material_id');
            $table->unsignedInteger('product_id');
            $table->unsignedInteger('color_id')->nullable();
            $table->string('height')->nullable();
            $table->string('width')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('materials_to_product');
    }
}
