import { Component } from '@angular/core';
import { VehiculoServiceService } from 'src/app/vehiculos/services/vehiculo-service.service';
import { Vehiculo } from '../../../../interfaces/vehiculo';
import { TipoVehiculo } from '../../../../interfaces/tipo-vehiculo';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent  {

  Vehiculo!:Vehiculo[];

  constructor (private vehiculoService:VehiculoServiceService)
  {

  }

  tipovehiculoSeleccionado:TipoVehiculo ={
    id:           0,
    tipoVehiculo: ''
  };

  tipovehiculo !: TipoVehiculo[];

  ngOnInit(): void {
    this.vehiculoService.getVehiculo().subscribe(Vehiculo => {
      this.Vehiculo = Vehiculo
    });

    this.vehiculoService.getTipovehiculo().subscribe(resp => {
      this.tipovehiculo = resp;
    })
    
  }

  seleccionar(){
    console.log(this.tipovehiculoSeleccionado.id);
    this.vehiculoService.porTipoVehiculo(this.tipovehiculoSeleccionado.id).subscribe(vehiculo =>
      {
        this.Vehiculo = vehiculo;
        console.log(this.Vehiculo);
      }
    );
  }

  name = 'Vehiculos.xlsx';
  exportToExcel(): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.Vehiculo);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }
}
