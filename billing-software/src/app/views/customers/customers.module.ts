import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { Routes, RouterModule } from '@angular/router';
import { MyMaterialModuleModule } from 'src/app/core/my-material-module.module';
import { CustomerBillsComponent } from './customer-bills/customer-bills.component';

const customersRoutes: Routes = [
  {path: '', component: CustomersComponent, children: [
    {path: 'customers', component: CustomersComponent},
  ]},
]

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerBillsComponent
  ],
  imports: [
    CommonModule, MyMaterialModuleModule,
    RouterModule.forChild(customersRoutes)
  ]
})
export class CustomersModule { }
