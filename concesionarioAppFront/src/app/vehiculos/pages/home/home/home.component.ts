import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../auth/services/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {


  constructor(private authService:AuthService, private router:Router){

  }

  
  get auth() {
    return this.authService.auth;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['./auth/login'])
  }
}
