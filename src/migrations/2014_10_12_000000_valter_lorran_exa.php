<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ValterLorranExa extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('exa_requests', function (Blueprint $table) {
            $table->increments('id');
            $table->string('url', 500);
            $table->boolean('acting_user')->default(false);
            $table->text('acting_user_sql')->nullable();
            $table->string('regex', 500);
            $table->text('assertions')->nullable();
            $table->string('method', 10)->nullable();
            $table->boolean('test')->default(true);
            $table->timestamps();
        });

        Schema::create('exa_request_maps', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('exa_request_id');
            $table->boolean('is_param')->default(false);
            $table->string('name', 255)->nullable();
            $table->string('map', 255)->nullable();
            $table->timestamps();
        });

        Schema::create('exa_request_map_values', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('exa_request_map_id');
            $table->string('value', 255)->nullable();
            $table->timestamps();
        });
        
        Schema::create('exa_tests', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('exa_request_id');
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
        Schema::dropIfExists('exa_requests');
        Schema::dropIfExists('exa_request_maps');
        Schema::dropIfExists('exa_request_map_values');
        Schema::dropIfExists('exa_tests');
    }
}
