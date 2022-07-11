import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreMaterialModule } from './views/core-material.module';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgMarqueeModule } from 'ng-marquee';
import { TeximateModule } from 'ngx-teximate';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ServicesComponent } from './views/services/services.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ContactComponent } from './views/contact/contact.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule, FlexLayoutModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' }), 
    HttpClientModule,CoreMaterialModule, NgImageSliderModule,NgMarqueeModule, TeximateModule
  ],
  providers: [],
  bootstrap: [AppComponent, HomeComponent]
})
export class AppModule { }
