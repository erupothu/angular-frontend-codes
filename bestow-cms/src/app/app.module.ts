import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { CoreAngularMaterialModule } from './core/core-angular-material.module';
import { AppRoutingModule } from './app-routing.module';

import { WelcomeModule } from './welcome/welcome.module';

import { AppComponent } from './app.component';
// import { WelcomeComponent } from './welcome/welcome.component';
// import { RegisterComponent } from './register/register.component';
// import { LoginComponent } from './login/login.component';
import { ViewblogComponent } from './view/viewblog/viewblog.component';
import { EditblogComponent } from './view/editblog/editblog.component';
import { CreateblogComponent } from './view/createblog/createblog.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ViewblogComponent,
    EditblogComponent,
    CreateblogComponent,
    UserDashboardComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule, CoreAngularMaterialModule, AppRoutingModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,
     BrowserAnimationsModule, HttpClientModule, FlexLayoutModule, CKEditorModule, WelcomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
