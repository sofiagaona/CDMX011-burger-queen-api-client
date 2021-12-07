import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { FormLoginComponent } from './pages/form-login/form-login.component';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent
  
  ],
  exports:[
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
