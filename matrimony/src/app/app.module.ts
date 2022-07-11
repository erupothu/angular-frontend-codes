import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMatModule } from './core/angular-mat.module';
import { RoutingModule } from './routing.module';
import { StickyModule } from 'ng2-sticky-kit';
import { HttpClientModule } from '@angular/common/http';
import { NgImageSliderModule } from 'ng-image-slider';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule, FlexLayoutModule, AngularMatModule, RoutingModule, StickyModule, HttpClientModule, NgImageSliderModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
