import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomaRoutingModule } from './homa-routing.module';
import { HomaComponent } from './homa.component';
import { ChandiComponent } from './chandi/chandi.component';
import { GanapathiComponent } from './ganapathi/ganapathi.component';
import { MruthyunjayaComponent } from './mruthyunjaya/mruthyunjaya.component';
import { NavagrahaComponent } from './navagraha/navagraha.component';
import { RudraComponent } from './rudra/rudra.component';
import { SudharshanaComponent } from './sudharshana/sudharshana.component';
import { VasthuComponent } from './vasthu/vasthu.component';


@NgModule({
  declarations: [
    HomaComponent,
    ChandiComponent,
    GanapathiComponent,
    MruthyunjayaComponent,
    NavagrahaComponent,
    RudraComponent,
    SudharshanaComponent,
    VasthuComponent
  ],
  imports: [
    CommonModule,
    HomaRoutingModule
  ]
})
export class HomaModule { }
