import { Component } from '@angular/core';
import { Vehiculo } from '../../../../interfaces/vehiculo';
import { VehiculoServiceService } from '../../../services/vehiculo-service.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent {
 termino : string = "";

 vehiculo : Vehiculo[] = [];

 vehiculoSeleccionado : Vehiculo | undefined;

 constructor (private vehiculoService:VehiculoServiceService)
 {

 }

 buscando(){
  this.vehiculoService.getSugerencias(this.termino.trim()).subscribe(
    vehiculo => this.vehiculo = vehiculo
  )
 }

 opcionSeleccionada(event : MatAutocompleteSelectedEvent) {
  if (!event.option.value) {

    this.vehiculoSeleccionado = undefined;
    return;
  }
    const vehiculo:Vehiculo = event.option.value;

    this.termino = vehiculo.marcaVehiculo; 

    this.vehiculoService.getVehiculoId(vehiculo.id!).subscribe(vehiculo => this.vehiculoSeleccionado = vehiculo)
  
}

 
}
