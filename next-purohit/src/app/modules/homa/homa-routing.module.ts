import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomaComponent } from './homa.component';
import { ChandiComponent } from './chandi/chandi.component';
import { GanapathiComponent } from './ganapathi/ganapathi.component';
import { MruthyunjayaComponent } from './mruthyunjaya/mruthyunjaya.component';
import { NavagrahaComponent } from './navagraha/navagraha.component';
import { RudraComponent } from './rudra/rudra.component';
import { SudharshanaComponent } from './sudharshana/sudharshana.component';
import { VasthuComponent } from './vasthu/vasthu.component';

const routes: Routes = [
  { path: '', redirectTo: 'homa', pathMatch: 'full' },
  { path: 'homa', component: HomaComponent },
  { path: 'chandi', component: ChandiComponent },
  { path: 'ganapathi', component: GanapathiComponent },
  { path: 'mruthunjaya', component: MruthyunjayaComponent},
  { path: 'navagraha', component: NavagrahaComponent },
  { path: 'rudra', component: RudraComponent },
  { path: 'sudharshana', component: SudharshanaComponent },
  { path: 'vasthu', component: VasthuComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomaRoutingModule { }
