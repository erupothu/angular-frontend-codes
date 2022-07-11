import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MyMaterialModuleModule } from 'src/app/core/my-material-module.module';

import { SettingsComponent } from './settings/settings.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { Routes, RouterModule } from '@angular/router';

const aboutRoutes: Routes = [
  {path: '', component: AboutComponent, children: [
    {path: 'settings', component: SettingsComponent},
    {path: 'documentation', component: DocumentationComponent}
  ]},
]

@NgModule({
  declarations: [
    AboutComponent,
    SettingsComponent,
    DocumentationComponent
  ],
  imports: [
    CommonModule, MyMaterialModuleModule, FormsModule, FlexLayoutModule, ReactiveFormsModule,
    RouterModule.forChild(aboutRoutes)
  ]
})
export class AboutModule { }
