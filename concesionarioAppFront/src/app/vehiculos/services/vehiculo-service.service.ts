import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Vehiculo } from 'src/app/interfaces/vehiculo';
import { Observable } from 'rxjs';
import { TipoVehiculo } from 'src/app/interfaces/tipo-vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoServiceService {

  private url :string = 'http://127.0.0.1:8000/api/'

  constructor(private http:HttpClient) { }

  getVehiculo(): Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(`${this.url}vehiculos`)
  }

  addVehiculo (vehiculo : Vehiculo):Observable<Vehiculo> {
    return this.http.post<Vehiculo>(`${this.url}addVehiculos`,vehiculo);
  }

  updateVehiculo (vehiculo : Vehiculo):Observable <Vehiculo> {
    return this.http.put<Vehiculo>(`${this.url}updateVehiculo/${vehiculo.id}`,vehiculo);

  }

  deteleVehiculo (id:number): Observable<any>{
    return this.http.delete(`${this.url}deleteVehiculo/${id}`)
  }

  getVehiculoId (id:number): Observable<Vehiculo>{
    return this.http.get<Vehiculo>(`${this.url}vehiculos/${id}`)
  }

  getTipovehiculo ():Observable<TipoVehiculo[]>{
    return this.http.get<TipoVehiculo[]>(`${this.url}tipoVehiculo`)
  }

  getSugerencias (termino:string):Observable<Vehiculo[]>{
    return this.http.post<Vehiculo[]>(`${this.url}search/`,termino);
  }

  porTipoVehiculo (id:number) : Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(`${this.url}portipoVehiculo/${id}`);
  }
}
