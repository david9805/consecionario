import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';
import { map,tap } from 'rxjs/operators';
// User interface

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private _auth: User | undefined;

  get auth(): User{
    return {... this._auth}
  }
  constructor(private http: HttpClient) {}
  
  //Registro Usuario
  register(user: User): Observable<User> {
    return this.http.post<User>('http://127.0.0.1:8000/api/register', user);
  }
  // Login
  login(user: User): Observable<User> {
    return this.http.post<User>('http://127.0.0.1:8000/api/login', user).pipe(
      tap( auth => {
        this._auth = auth;
        if (this._auth)
        {
          localStorage.setItem('token',auth.id!)
        }        
      })
    );
  }

  logout(){
    this._auth = undefined;
    localStorage.removeItem('token')
    console.log (this._auth,!localStorage.getItem('token'))
  }

  autenticacion(): Observable<boolean> {
    console.log (localStorage.getItem('token'))
    if (!localStorage.getItem('token')){
      return of(false);
    }
    else
    {
      return this.http.get<User>(`http://127.0.0.1:8000/api/sesion/${localStorage.getItem('token')}`).pipe(
        map(auth => {
          this._auth = auth
          return true;
        })
      )
    }
  }
}