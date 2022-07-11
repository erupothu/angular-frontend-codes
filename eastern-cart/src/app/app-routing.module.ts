import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";

import { DashboardComponent } from './views/dashboard/dashboard.component';

const routes: Routes = [
 {path:'', component:DashboardComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ], exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
