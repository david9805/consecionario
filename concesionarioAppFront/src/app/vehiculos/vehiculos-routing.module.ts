import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar/buscar.component';
import { HomeComponent } from './pages/home/home/home.component';
import { ListadoComponent } from './pages/listado/listado/listado.component';
import { VehiculoComponent } from './pages/vehiculo/vehiculo/vehiculo.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
    {
      path:'agregar',component:AgregarComponent
    },
    {
      path:'editar/:id',component:AgregarComponent
    },
    {
      path:'buscar',component:BuscarComponent
    },
    {
      path:'home',component:HomeComponent
    },
    {
      path:'listado',component:ListadoComponent
    },
    {
      path:'vehiculo',component:VehiculoComponent
    },
    {
      path:'**',redirectTo:'listado'
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculosRoutingModule { }
