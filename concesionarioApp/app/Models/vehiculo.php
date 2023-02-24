<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class vehiculo extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = ['idtipoVehiculo','marcaVehiculo','modeloVehiculo','precioVehiculo','imagenVehiculo'];
}
