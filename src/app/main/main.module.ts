import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http'
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent}
  
 ];
@NgModule({
  declarations: [LoginComponent, RegisterComponent, DashboardComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule,RouterModule.forChild(routes)
  ]
})
export class MainModule { }
