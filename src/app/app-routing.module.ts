import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './modules/components/login/login.component';
import { DashboardComponent } from './modules/components/dashboard/dashboard.component';
import { AuthGuard } from './authentication.guard';    

const routes: Routes = [
  { path: 'login', component: LoginComponent },  
  { path: 'dashboard', component: DashboardComponent, canActivate : [AuthGuard] } ,
  { path: '**', component: LoginComponent },  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
