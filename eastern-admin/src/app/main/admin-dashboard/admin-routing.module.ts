import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from 'src/app/views/dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminDatabaseComponent } from 'src/app/views/database-management/admin-database/admin-database.component';
import { AdminStorageComponent } from 'src/app/views/admin-storage/admin-storage/admin-storage.component';
import { AdminAboutusComponent } from 'src/app/views/admin-pages/admin-aboutus/admin-aboutus.component';
import { AdminContactUsComponent } from 'src/app/views/admin-pages/admin-contact-us/admin-contact-us.component';

const routes: Routes = [
  {path: '', component: AdminDashboardComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'admin-database', component: AdminDatabaseComponent},
    {path: 'admin-storage', component: AdminStorageComponent},
    {path: 'admin-aboutus', component: AdminAboutusComponent},
    {path: 'admin-contactus', component: AdminContactUsComponent},
  ]
} 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ], exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
