import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { EasternWebComponent } from './main/eastern-web/eastern-web.component';
import { AngualrMatModule } from './core/angualr-mat.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {path: '', component: EasternWebComponent},
  {path: 'admin', loadChildren: () => import('./main/admin-dashboard/admin.module').then(m => m.AdminModule)}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ], exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
