import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherServicesRoutingModule } from './other-services-routing.module';
import { OtherServicesComponent } from './other-services.component';
import { AstrologyComponent } from './astrology/astrology.component';
import { HoroscopeComponent } from './horoscope/horoscope.component';
import { JyothisyamComponent } from './jyothisyam/jyothisyam.component';
import { VasthuComponent } from './vasthu/vasthu.component';


@NgModule({
  declarations: [
    OtherServicesComponent,
    AstrologyComponent,
    HoroscopeComponent,
    JyothisyamComponent,
    VasthuComponent
  ],
  imports: [
    CommonModule,
    OtherServicesRoutingModule
  ]
})
export class OtherServicesModule { }
