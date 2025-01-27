import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { ILogin } from 'src/app/shared/models/Login.model'; 
import { AuthenticationService } from 'src/app/auth/authentication.service'  

import { FormBuilder, FormGroup, Validators } from '@angular/forms';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(  
    private formBuilder : FormBuilder,  
    private router : Router,  
    private authService : AuthenticationService  
 ) { }

 model: ILogin = { userid: "admin", password: "admin@123" }  //new variable modal

 loginForm: FormGroup;  
 message: string;  
 returnUrl: string; 
 submitted = false;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({  
      userid: ['', Validators.required],  
      password: ['', Validators.required]  
   });  
  this.returnUrl = '/dashboard';  
  this.authService.logout(); 
  }
  // convenience getter function for easy access to form fields  
  
get f() { return this.loginForm.controls; }  


login() {  
  this.submitted = true;
  // stop here if form is invalid  
  if (this.loginForm.invalid) {  
     return;  
  }  
  else {  
     if (this.f.userid.value == this.model.userid && this.f.password.value == this.model.password) {  
        console.log("Login successful");  
        //this.authService.authLogin(this.model);  
        sessionStorage.setItem('isLoggedIn', "true");  //SessionStorage
        sessionStorage.setItem('token', this.f.userid.value);  
        this.router.navigate([this.returnUrl]);  
     }  
  else {  
     this.message = "Please check your userid and password";  
     }  
    }  
  } 
}
