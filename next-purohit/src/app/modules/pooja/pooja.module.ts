import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoojaRoutingModule } from './pooja-routing.module';
import { PoojaComponent } from './pooja.component';
import { DurgaComponent } from './durga/durga.component';
import { SathyanarayanaComponent } from './sathyanarayana/sathyanarayana.component';


@NgModule({
  declarations: [
    PoojaComponent,
    DurgaComponent,
    SathyanarayanaComponent
  ],
  imports: [
    CommonModule,
    PoojaRoutingModule
  ]
})
export class PoojaModule { }
