import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  constructor (private authService:AuthService, private router : Router, private snackbar: MatSnackBar) {

  }

  @ViewChild('miFormulario') miFormulario!:NgForm;

  user:User = {
    name:'',
    email:'',
    password:'',
    password_confirmation:''
  }
  guardar() {

      this.authService.register(this.user).subscribe(heroe => {
        this.router.navigate(['/auth/login']);
        this.mostrarSnackBar('Registro Creado');
      });      
     
  }

  nombreValido ():boolean {
    return this.miFormulario?.controls['name']?.invalid && this.miFormulario?.controls['name']?.touched
  }

  emailValido () : boolean {
    let mailValido = false;
    'use strict';

    var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    
      if (!this.miFormulario?.controls['email']?.pristine && !this.miFormulario?.controls['email']?.value.match(EMAIL_REGEX)){
        
        mailValido = true;
      }
      if (this.miFormulario?.controls['email']?.invalid && this.miFormulario?.controls['email']?.touched) {
        mailValido = true;
      }
     
    return mailValido;
  }

  digitarContrasena ():boolean {
    let contrasena = false

      if (this.miFormulario?.controls['password']?.value.trim().length <= 6 && this.miFormulario?.controls['password']?.value.trim() != "")
      {
        contrasena = true;
      }
      else
      {
        contrasena = false;
      }
     return contrasena;
  }

  contrasenaValida ():boolean {
    return this.miFormulario?.controls['password_confirmation']?.invalid && this.miFormulario?.controls['password_confirmation']?.touched;
  }

  coincideContrasena ():boolean {
    let contrasena = false;

    if (!this.miFormulario?.controls['password_confirmation']?.pristine && this.miFormulario?.controls['password_confirmation']?.value != this.miFormulario?.controls['password']?.value){
       contrasena = true;
    }
    return contrasena;
  }

  mostrarSnackBar(mensaje:string){

    this.snackbar.open(mensaje, 'Ok!',{
      duration: 2500
    });
  }
  }

