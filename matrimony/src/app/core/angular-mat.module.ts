import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatButtonModule, MatRadioModule, MatTabsModule,
MatSelectModule} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatButtonModule, MatRadioModule,
    MatSelectModule, MatTabsModule
  ], exports: [
    MatToolbarModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatButtonModule, MatRadioModule, MatSelectModule,
    MatTabsModule
  ]
})
export class AngularMatModule { }
