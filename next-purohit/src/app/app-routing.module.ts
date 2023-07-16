import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ContactUsComponent } from './views/contact/contact-us.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

const routes: Routes = [
  { path: '',  redirectTo: 'home', pathMatch: 'full'},
  { path: 'about-us', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent},
  { path: "homa", loadChildren: () => import('./homa/homa.module').then(m => m.HomaModule) },
  { path: 'pooja', loadChildren: () => import('./pooja/pooja.module').then(m => m.PoojaModule) },
  { path: 'ceremony', loadChildren: () => import('./ceremony/ceremony.module').then(m => m.CeremonyModule) },
  { path: 'other-services', loadChildren: () => import('./other-services/other-services.module').then(m => m.OtherServicesModule) },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
