import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AboutComponent } from './views/about/about.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './views/access-denied/access-denied.component';
import { ContactUsComponent } from './views/contact/contact-us.component';
import { MaterialModule } from './material.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    AboutComponent,
    PageNotFoundComponent,
    AccessDeniedComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
