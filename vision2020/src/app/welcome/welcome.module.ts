import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { AngularMaterialModule } from '../core/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from '../login/login.component';
import { WelcomeComponent } from './welcome.component';
import { RegisterComponent } from '../register/register.component';



@NgModule({
  declarations: [
    WelcomeComponent, LoginComponent, RegisterComponent
  ],
  imports: [
    CommonModule, WelcomeRoutingModule, AngularMaterialModule, FormsModule, ReactiveFormsModule
  ],
  exports: [
    WelcomeComponent, LoginComponent
  ]
})
export class WelcomeModule { }
