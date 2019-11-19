<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRouteRealignmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('route_realignments', function (Blueprint $table) {
            $table->bigIncrements('id');
            
            $table->integer('user_number');
            $table->integer('outlet_number');
            $table->string('outlet_type');
            $table->string('distribution_house_code');
            $table->string('distributor_code');
            $table->string('area');
            $table->string('territory');

            $table->integer('type');
            $table->integer('cursor');
            $table->integer('interval');
            $table->integer('offset');
            
            $table->date('created_at');
            $table->date('updated_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('route_realignments');
    }
}
