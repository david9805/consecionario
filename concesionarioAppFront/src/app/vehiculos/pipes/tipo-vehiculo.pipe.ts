import { Pipe, PipeTransform } from '@angular/core';
import { Vehiculo } from 'src/app/interfaces/vehiculo';
import { VehiculoServiceService } from '../services/vehiculo-service.service';
import { map, tap } from 'rxjs/operators';
import { TipoVehiculo } from 'src/app/interfaces/tipo-vehiculo';

@Pipe({
  name: 'tipoVehiculo'
})
export class TipoVehiculoPipe implements PipeTransform {

  vehiucle !: TipoVehiculo[];
  nom : string = '';
  seleccionado !: TipoVehiculo[];
  constructor(private vehiculoService:VehiculoServiceService)
  {
    
  }


  
  transform(value: Vehiculo): string {

    this.vehiculoService.getTipovehiculo().subscribe(
      resp =>
      {
        this.vehiucle = resp  
        this.seleccionado =this.vehiucle.filter(item => item.id === value.idtipoVehiculo);

        this.nom = this.seleccionado[0]["tipoVehiculo"];
        
      })

      console.log(this.nom);
      return this.nom;
      
 }
  

}
