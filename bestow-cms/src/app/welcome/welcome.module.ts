import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { CoreAngularMaterialModule } from '../core/core-angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WelcomeComponent } from './welcome.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';




@NgModule({
  declarations: [
    WelcomeComponent, LoginComponent, RegisterComponent
  ],
  imports: [
    CommonModule, WelcomeRoutingModule, CoreAngularMaterialModule, FormsModule, ReactiveFormsModule
  ]
})
export class WelcomeModule { }
