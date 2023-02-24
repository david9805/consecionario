import { Component,OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculoServiceService } from '../../../services/vehiculo-service.service';
import { switchMap,tap } from 'rxjs/operators';
import { Vehiculo } from 'src/app/interfaces/vehiculo';
import { TipoVehiculo } from '../../../../interfaces/tipo-vehiculo';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/vehiculos/components/confirm/confirm.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit{
  
  @ViewChild('miFormulario') miFormulario!:NgForm;

  vehiculo : Vehiculo = {
    idtipoVehiculo: 1,
    marcaVehiculo:  '',
    modeloVehiculo: '',
    precioVehiculo: 0,
    imagenVehiculo:''
  }

  tipoVehiculo!:TipoVehiculo[];
  constructor(private vehiculoService:VehiculoServiceService, private router: Router, private activatedRoute:ActivatedRoute,private snackbar:MatSnackBar,public dialog:MatDialog){

  }
  

  ngOnInit(): void {

    this.vehiculoService.getTipovehiculo().subscribe(
      resp => this.tipoVehiculo = resp
    );

    if (!this.router.url.includes('editar'))
    {
      return;
    }
    
    this.activatedRoute.params.pipe(switchMap(({id})=> this.vehiculoService.getVehiculoId(id))).subscribe( vehiculo => this.vehiculo = vehiculo)
    
  }


  guardar() {
    if (this.vehiculo.id)
    {
      this.vehiculoService.updateVehiculo(this.vehiculo).subscribe(vehiculo =>
        {
          this.router.navigate(['./vehiculo/listado'])
        })
    }
    else
    {
      this.vehiculoService.addVehiculo(this.vehiculo).subscribe(vehiculo => 
        {
          this.router.navigate(['./vehiculo/listado'])
        })
    }
  }

  borrarVehiculo(){

    const dialog = this.dialog.open(ConfirmComponent,{
      width:'350px',
      height: '200px',
      data: this.vehiculo
    })

    dialog.afterClosed().subscribe(      
      (result) => {        
        if (result) {
          this.vehiculoService.deteleVehiculo(this.vehiculo.id!).subscribe(resp => {
            this.router.navigate(['vehiculo/listado'])
          });
        }
      }
    )
  }

  marcaValido () {
    return this.miFormulario?.controls['marcaVehiculo']?.invalid && this.miFormulario?.controls['marcaVehiculo']?.touched
  }

  modeloValido(){
    return this.miFormulario?.controls['modeloVehiculo']?.invalid && this.miFormulario?.controls['modeloVehiculo']?.touched
  }

  precioValido () {
    return this.miFormulario?.controls['precioVehiculo']?.invalid && this.miFormulario?.controls['precioVehiculo']?.touched
  }
  mostrarSnackBar(mensaje:string){

    this.snackbar.open(mensaje, 'Ok!',{
      duration: 2500
    });
  }
}
