import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoojaComponent } from './pooja.component';
import { DurgaComponent } from './durga/durga.component';
import { SathyanarayanaComponent } from './sathyanarayana/sathyanarayana.component';

const routes: Routes = [
  { path: '', redirectTo: 'pooja', pathMatch: 'full' },
  { path: 'pooja', component: PoojaComponent },
  { path: 'durga', component: DurgaComponent },
  { path: 'satyanarayana', component: SathyanarayanaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoojaRoutingModule { }
