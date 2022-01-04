import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { FormLoginComponent } from './pages/form-login/form-login.component';
import {CarruselComponent} from './pages/carrusel/carrusel.component'
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';







@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent,
    CarruselComponent
  
  ],
  exports:[
    LoginComponent,
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
   MaterialModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AuthModule {}
