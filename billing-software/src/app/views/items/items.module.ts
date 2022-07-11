import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items.component';
import { Routes, RouterModule } from '@angular/router';
import { MyMaterialModuleModule } from 'src/app/core/my-material-module.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsStockComponent } from './items-stock/items-stock.component';
import { AddItemDialogComponent } from './items-list/add-item-dialog/add-item-dialog.component';

const itemsRoutes: Routes = [
  {path: '', component: ItemsComponent, children: [
    {path: 'items-list', component: ItemsListComponent},
    {path: 'items-stock', component: ItemsStockComponent},
  ]},
]

@NgModule({
  declarations: [
    ItemsComponent,
    ItemsListComponent,
    ItemsStockComponent,
    AddItemDialogComponent
  ],
  imports: [
    CommonModule, MyMaterialModuleModule, FlexLayoutModule, FormsModule, ReactiveFormsModule,
    RouterModule.forChild(itemsRoutes)
  ],
  entryComponents: [
    AddItemDialogComponent
  ]
})
export class ItemsModule { }
