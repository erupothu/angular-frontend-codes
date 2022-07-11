import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {StickyModule} from 'ng2-sticky-kit';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgImageSliderModule } from 'ng-image-slider';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {CoreMaterialModule} from './core/core-material.module';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, StickyModule, FlexLayoutModule, CoreMaterialModule, AppRoutingModule, FilterPipeModule, NgImageSliderModule,
    HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
