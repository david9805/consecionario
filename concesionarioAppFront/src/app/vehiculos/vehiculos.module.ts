import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculosRoutingModule } from './vehiculos-routing.module';
import { AgregarComponent } from './pages/agregar/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar/buscar.component';
import { HomeComponent } from './pages/home/home/home.component';
import { ListadoComponent } from './pages/listado/listado/listado.component';
import { VehiculoComponent } from './pages/vehiculo/vehiculo/vehiculo.component';
import { MaterialModule } from '../material/material/material.module';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    
  
    AgregarComponent,
    BuscarComponent,
    HomeComponent,
    ListadoComponent,
    VehiculoComponent,
    TarjetaComponent,
    ConfirmComponent
    
    
  ],
  imports: [
    CommonModule,
    VehiculosRoutingModule,
    MaterialModule,
    FormsModule,
    NgxSpinnerModule
  ]
})
export class VehiculosModule { }
