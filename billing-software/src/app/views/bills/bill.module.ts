import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NgxPrintModule} from 'ngx-print';

import { BillsComponent } from './bills.component';
import { Routes, RouterModule } from '@angular/router';
import { MyMaterialModuleModule } from 'src/app/core/my-material-module.module';
import { NewBillComponent } from './new-bill/new-bill.component';
import { ManageBillsComponent } from './manage-bills/manage-bills.component';
import { ViewSalesComponent } from './view-sales/view-sales.component';
import { ViewSavedBillsComponent } from './view-saved-bills/view-saved-bills.component';
import { AddNewBillDialogComponent } from './new-bill/add-new-bill-dialog/add-new-bill-dialog.component';
import { BillPrintDialogComponent } from './new-bill/bill-print-dialog/bill-print-dialog.component';

const billRoutes: Routes = [
  {path: '', component: BillsComponent, children: [
    {path: 'new-bill', component: NewBillComponent},
    {path: 'manage-bills', component: ManageBillsComponent},
    {path: 'view-sales', component: ViewSalesComponent},
    {path: 'view-saved-bills', component: ViewSavedBillsComponent}
  ]},
]

@NgModule({
  declarations: [
    BillsComponent,
    NewBillComponent,
    ManageBillsComponent,
    ViewSalesComponent,
    ViewSavedBillsComponent,
    AddNewBillDialogComponent,
    BillPrintDialogComponent
  ],
  imports: [
    CommonModule, MyMaterialModuleModule, FormsModule, ReactiveFormsModule, FlexLayoutModule, NgxPrintModule,
    RouterModule.forChild(billRoutes)
  ],
  entryComponents: [
    AddNewBillDialogComponent, BillPrintDialogComponent
  ]
})
export class BillModule { }
