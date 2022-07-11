import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AngualrMatModule  } from '../../core/angualr-mat.module';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FlipModule } from 'ngx-flip';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SanitizehtmlPipe } from './sanitizehtml.pipe';


import { DashboardComponent} from '../../views/dashboard/dashboard.component';
import { AdminStorageComponent } from '../../views/admin-storage/admin-storage/admin-storage.component';
import { AdminDatabaseComponent } from '../../views/database-management/admin-database/admin-database.component';
import { AdminContactUsComponent } from 'src/app/views/admin-pages/admin-contact-us/admin-contact-us.component';
import { AdminAssetsComponent } from 'src/app/views/admin-storage/admin-assets/admin-assets.component';

@NgModule({
  declarations: [
    DashboardComponent, AdminStorageComponent, AdminDatabaseComponent, AdminContactUsComponent, SanitizehtmlPipe, AdminAssetsComponent
  ],
  imports: [
    CommonModule, AdminRoutingModule, AngualrMatModule, FlexLayoutModule, FlipModule, FormsModule, ReactiveFormsModule, CKEditorModule
  ]
})
export class AdminModule { }
