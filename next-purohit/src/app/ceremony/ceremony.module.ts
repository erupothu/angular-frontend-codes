import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CeremonyRoutingModule } from './ceremony-routing.module';
import { CeremonyComponent } from './ceremony.component';
import { AksharabhyasamComponent } from './aksharabhyasam/aksharabhyasam.component';
import { EngagementComponent } from './engagement/engagement.component';
import { MarriageComponent } from './marriage/marriage.component';
import { ShanthiComponent } from './shanthi/shanthi.component';
import { UpanayanamComponent } from './upanayanam/upanayanam.component';


@NgModule({
  declarations: [
    CeremonyComponent,
    AksharabhyasamComponent,
    EngagementComponent,
    MarriageComponent,
    ShanthiComponent,
    UpanayanamComponent
  ],
  imports: [
    CommonModule,
    CeremonyRoutingModule
  ]
})
export class CeremonyModule { }
