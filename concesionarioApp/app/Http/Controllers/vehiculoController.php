<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\vehiculo;
use App\Models\tipoVehiculo;
use Illuminate\Support\Facades\Log;

/**
 * @OA\Info(title="concesionario", version="0.1")
 */
class vehiculoController extends Controller
{
    public function getVehiculo() {
        try {
            
            $consulta = vehiculo::all();
            Log::info('Informacion Correcta GetVehiculo');
            return response()->json($consulta);
            
        }
        catch (Exception $e)
        {
            Log::error($e);
            return response()->json('Error GetVehiculo',404);
        }
        
    }

    public function getTipoVehiculo() {
        try{
            $consulta = tipoVehiculo::all();
            Log::info('Informacion Correcta getTipoVehiculo');
            return response()->json($consulta);
        }
        catch (Exception $e)
        {
            Log::error($e);
            return response()->json('Error getTipoVehiculo',404);
        }
        
    }

    public function getVehiculoId($id){
        try
        {
            $vehiculo = vehiculo::find($id);
            if(is_null($vehiculo)){
                Log::emergency('Vehiculo no encontrado');
                return response()->json(['message'=>'Vehiculo no encontrado'],404);
            }
            else
            {
                Log::info('Informacion Correcta getVehiculoId');
                return response()->json($vehiculo::find($id));
            }

        }
        catch (Exception $e)
        {
            Log::error($e);
            return response()->json('Error getTipoVehiculo',404);
        }
        
    }

    

    public function addVehiculo(Request $request){
        try{
            $vehiculo = vehiculo::create($request->all());
            Log::info('Vehiculo Agregado');
            return response($vehiculo,201);
        }
        catch (Exception $e)
        {
            Log::error($e);
            return response()->json('Error addVehiculo',404);
        }
        
    }

    public function updateVehiculo(Request $request,$id){
        try{
            $vehiculo = vehiculo::find($id);
            if(is_null($vehiculo)){
                Log::emergency('Vehiculo no encontrado updateVehiculo');
                return response()->json(['message'=>'Vehiculo no encontrado'],404);
            }
            else
            {
                $vehiculo->update($request->all());
                Log::info('Vehiculo actualizado');
                return response($vehiculo,201);
            }
        }
        catch (Exception $e)
        {
            Log::error($e);
            return response()->json('Error updateVehiculo',404);
        }       

    }

    public function deleteVehiculo(Request $request,$id){
        try{
            $vehiculo = vehiculo::find($id);
            if(is_null($vehiculo)){
                Log::emergency('Vehiculo no encontrado updateVehiculo');
                return response()->json(['message'=>'Vehiculo no encontrado'],404);
            }
            else
            {
                $vehiculo->delete();
                Log::info('Vehiculo actualizado');
                return response()->json(null,204);
            }
        }
        catch (Exception $e)
        {
            Log::error($e);
            return response()->json('Error deleteVehiculo',404);
        } 

    }

    public function search(Request $request){
        try
        {
            $consulta = vehiculo::where('marcaVehiculo','LIKE','%'.$request->termino.'%')
            ->orWhere('modeloVehiculo','LIKE','%'.$request->termino.'%')
            ->get();     
            Log::info('Busqueda exitosa Search');   
            return response()->json($consulta);
        }
        catch (Exception $e)
        {
            Log::error($e);
            return response()->json('Error search',404);
        } 
        
    }

    public function portipoVehiculo(Request $request,$id)
    {
        try {
            $consulta = vehiculo::where('idtipoVehiculo','=',$id)
            ->get();
            Log::info('Busqueda exitosa portipoVehiculo');   
            return response()->json($consulta);
        }
        catch (Exception $e)
        {
            Log::error($e);
            return response()->json('Error portipoVehiculo',404);
        }         
    }
}

