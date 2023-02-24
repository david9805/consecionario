import { Component,Input } from '@angular/core';
import { Vehiculo } from 'src/app/interfaces/vehiculo';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styles: [
    `
   mat-card {
    margin-top:20px;
   }
  `
  ]
})
export class TarjetaComponent {

  @Input() vehiculo!: Vehiculo


}
