import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
// import { WelcomeComponent } from './welcome/welcome.component';
import { EditblogComponent } from './view/editblog/editblog.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CreateblogComponent } from './view/createblog/createblog.component';
import { ViewblogComponent } from './view/viewblog/viewblog.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';



const routes: Routes = [
  { path: '', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'createblog', component: CreateblogComponent},
  { path: 'view-blog', component: ViewblogComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ], exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
