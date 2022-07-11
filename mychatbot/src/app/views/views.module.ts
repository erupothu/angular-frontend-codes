import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { ChatingComponent } from './chating/chating.component';
import { ViewsComponent } from './views.component';
import { HttpClientModule } from '@angular/common/http';


const child_routes: Routes = [
  { path: '', component: ViewsComponent, children: [
    { path: 'chating', component: ChatingComponent}
  ] }
]

@NgModule({
  declarations: [ChatingComponent, ViewsComponent],
  imports: [
    CommonModule, FormsModule,MatButtonModule,MatToolbarModule,MatSidenavModule,MatIconModule, MatFormFieldModule, HttpClientModule,
    MatListModule, MatInputModule,RouterModule.forChild(child_routes)
  ]
})
export class ViewsModule { }
