import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardWelcomeComponent } from './dashboard-welcome/dashboard-welcome.component';

const routes: Routes = [
  { path: '', component: DashboardComponent,
    children: [
      { path: 'dashboard-welcome', component: DashboardWelcomeComponent },
      { path: '', component: DashboardWelcomeComponent }
    ]}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
