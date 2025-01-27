import { Injectable } from '@angular/core';
import { ILogin } from 'src/app/shared/models/Login.model';   

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  logout() :void {    
    sessionStorage.setItem('isLoggedIn','false');    
    sessionStorage.removeItem('token');    
  }

}
