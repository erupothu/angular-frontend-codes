import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherServicesComponent } from './other-services.component';
import { AstrologyComponent } from './astrology/astrology.component';
import { HoroscopeComponent } from './horoscope/horoscope.component';
import { JyothisyamComponent } from './jyothisyam/jyothisyam.component';
import { VasthuComponent } from './vasthu/vasthu.component';

const routes: Routes = [
  { path: '', redirectTo: 'other-services', pathMatch: 'full' },
  { path: 'other-service', component: OtherServicesComponent },
  { path: 'astrology', component: AstrologyComponent },
  { path: 'horoscope', component: HoroscopeComponent },
  { path: 'jyothishyam', component: JyothisyamComponent },
  { path: 'vasthu', component: VasthuComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherServicesRoutingModule { }
