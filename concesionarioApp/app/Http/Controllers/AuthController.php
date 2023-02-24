<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Validator;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

/**
 * @OA\Info(title="concesionario", version="0.1")
 */
class AuthController extends Controller {

    
    
    public function login(Request $request){
        try {
            $credentials = [
                "email" => $request->email,
                "password" => $request->password
            ];
    
    
            if (Auth::attempt($credentials)) {
                Log::info('Inicio Sesion');
                return response()->json(auth()->user());
            }
        }
        catch (Exception $e)
        {
            Log::error($e);
            return response()->json('Error Inicio Sesion',404);
        }    	        
    }

    
    public function register(Request $request) {
        try{
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|between:2,100',
                'email' => 'required|string|email|max:100|unique:users',
                'password' => 'required|string|confirmed|min:6',
            ]);
    
            if($validator->fails()){
                return response()->json($validator->errors(), 400);
            }
    
            $user = User::create(array_merge(
                        $validator->validated(),
                        ['password' => bcrypt($request->password)]
                    ));

            Log::info('Registro Exitoso');
            return response()->json([
                'message' => 'User successfully registered',
                'user' => $user
            ], 201);
        }
        catch (Exception $e)
        {
            Log::error($e);
            return response()->json('Error Registro Usuario',404);
        }            
    }


    
    public function logout(Request $request) {
        try {
            Log::info('Logout');
            return response()->json(Auth::logout());
        }
        catch (Exception $e)
        {
            Log::error($e);
            return response()->json('Error Registro Usuario',404);
        }    
        
    }

    public function getUser($id){
        try{
            $usuario = User::find($id);
            if(is_null($usuario)){
                Log::Emergency('Usuario no encontrado');
                return response()->json(['message'=>'Usuario no encontrado'],404);
            }
            else
            {
                Log::info('Usuario Encontrado');
                return response()->json($usuario::find($id));
            }
        }
        catch (Exception $e)
        {
            Log::error($e);
            return response()->json('Error Registro Usuario',404);
        }   
        
    }


}
