<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\vehiculoController;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/



    Route::post('login', [AuthController::class,'login']);
    Route::post('register', [AuthController::class,'register']);
    Route::post('logout', [AuthController::class,'logout']);
    Route::get('sesion/{id}', [AuthController::class,'getUser']);

// Get todos los vehiculos
Route::get('vehiculos',[vehiculoController::class,'getVehiculo']);


//Get vehiculo seleccionado

Route::get('vehiculos/{id}',[vehiculoController::class,'getVehiculoId']);

// Agregar Vehiculo

Route::post('addVehiculos',[vehiculoController::class,'addVehiculo']);

// Obtener vehiculo

Route::put('updateVehiculo/{id}',[vehiculoController::class,'updateVehiculo']);

// Borrar vehiculo


Route::delete('deleteVehiculo/{id}',[vehiculoController::class,'deleteVehiculo']);


// Get todos los vehiculos
Route::get('tipoVehiculo',[vehiculoController::class,'getTipoVehiculo']);

// Obtiene vehiculos por marca

Route::post('search',[vehiculoController::class,'search']);

//Obtiene vehiculos por tipo 


Route::get('portipoVehiculo/{id}',[vehiculoController::class,'portipoVehiculo']);