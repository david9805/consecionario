import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'vehiculo',
    loadChildren:()=>import('./vehiculos/vehiculos.module').then(m => m.VehiculosModule),
    canLoad:[AuthGuard],
    canActivate:[AuthGuard]
    
  },
  {
    path:'**',
    redirectTo:'auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
