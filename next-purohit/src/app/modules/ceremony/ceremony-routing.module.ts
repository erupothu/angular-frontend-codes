import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CeremonyComponent } from './ceremony.component';
import { UpanayanamComponent } from './upanayanam/upanayanam.component';
import { ShanthiComponent } from './shanthi/shanthi.component';
import { MarriageComponent } from './marriage/marriage.component';
import { EngagementComponent } from './engagement/engagement.component';
import { AksharabhyasamComponent } from './aksharabhyasam/aksharabhyasam.component';

const routes: Routes = [
  { path: '', redirectTo: 'ceremony', pathMatch: 'full' },
  { path: 'ceremony', component: CeremonyComponent },
  { path: 'aksharabhyasam', component: AksharabhyasamComponent },
  { path: 'engagement', component: EngagementComponent },
  { path: 'marriage', component: MarriageComponent },
  { path: 'shanthi', component: ShanthiComponent },
  { path: 'upanayanam', component: UpanayanamComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CeremonyRoutingModule { }
