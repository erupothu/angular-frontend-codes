import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlipModule } from 'ngx-flip';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AngualrMatModule } from './core/angualr-mat.module';

import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './main/admin-dashboard/admin-dashboard.component';
import { EasternWebComponent } from './main/eastern-web/eastern-web.component';
import { AboutusComponent } from './views/pages/aboutus/aboutus.component';
import { HomePageComponent } from './views/pages/home-page/home-page.component';
import { AdminAboutusComponent } from './views/admin-pages/admin-aboutus/admin-aboutus.component';
import { AdminHomePageComponent } from './views/admin-pages/admin-home-page/admin-home-page.component';

@NgModule({
  declarations: 
  [
    AppComponent,
    AdminDashboardComponent,
    EasternWebComponent,
    AboutusComponent,
    HomePageComponent,
    AdminAboutusComponent,
    AdminHomePageComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, AngualrMatModule, FormsModule, FlexLayoutModule, BrowserAnimationsModule,
    FlipModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
