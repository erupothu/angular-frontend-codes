import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MyMaterialModuleModule } from '../../core/my-material-module.module';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { MainComponent } from './main.component';

const mainRoutes: Routes = [
  {path: '', component: MainComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'bills', loadChildren: () => import('../bills/bill.module').then(m => m.BillModule)},
    {path: 'about', loadChildren: () => import('../about/about.module').then(m => m.AboutModule)},
    {path: 'customers', loadChildren: () => import('../customers/customers.module').then(m => m.CustomersModule)},
    {path: 'items', loadChildren: () => import('../items/items.module').then(m => m.ItemsModule)}
  ]},
]

@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent
  ],
  imports: [
    CommonModule, MyMaterialModuleModule,
    RouterModule.forChild(mainRoutes)
  ]
})
export class MainModule { }
