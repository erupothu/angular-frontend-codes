import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AngularMaterialModule } from './core/angular-material.module';
import { AppRoutingModule  } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { WelcomeModule } from './welcome/welcome.module';

import { AppComponent } from './app.component';
// import { WelcomeComponent } from './welcome/welcome.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout/layout.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule, AngularMaterialModule, AppRoutingModule, BrowserAnimationsModule, DashboardModule, WelcomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
