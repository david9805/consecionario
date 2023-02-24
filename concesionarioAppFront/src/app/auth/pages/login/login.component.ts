import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from '../../services/auth-service.service';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor (private authService:AuthService,private router:Router,private snackbar : MatSnackBar){

  }

  user:User = {
    email:'',
    password:''
  }

  login(){
    this.authService.login(this.user).subscribe(resp => {
      if (resp) 
      {
        this.router.navigate(['./vehiculo'])
      }
      else{
        this.mostrarSnackBar('Usuario o Contraseña Incorrectos')
      }
    });
  }

  mostrarSnackBar(mensaje:string){

    this.snackbar.open(mensaje, 'Ok!',{
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
