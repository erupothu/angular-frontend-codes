import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// import { WelcomeComponent } from './welcome/welcome.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout/layout.component';
import { BlogComponent } from './blog/blog.component';



const routes: Routes = [
  { path: '', loadChildren: () => import ('./welcome/welcome.module').then(m => m.WelcomeModule) },
  // { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  // { path: 'welcome', component: WelcomeComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'dashboard', loadChildren: () => import ('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'blog', component: BlogComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
