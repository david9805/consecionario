<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('Vehiculos', function (Blueprint $table) {
            $table->id();
            $table->integer('idtipoVehiculo');
            $table->string('marcaVehiculo',50);
            $table->string('modeloVehiculo',50);
            $table->double('precioVehiculo',18,2);  
            $table->string('imagenVehiculo',191);          
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehiculos');
    }
};

