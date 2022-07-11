import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatFormFieldModule, MatCardModule, MatTableModule, MatToolbarModule, MatSidenavModule,
MatIconModule, MatStepperModule, MatMenuModule, MatListModule, MatDividerModule, MatAutocompleteModule, MatInputModule } from "@angular/material";




@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatButtonModule, MatFormFieldModule, MatCardModule, MatTableModule, MatToolbarModule, MatSidenavModule, MatIconModule,
    MatStepperModule, MatMenuModule,MatListModule, MatDividerModule, MatAutocompleteModule, MatInputModule
  ],
  exports: [CommonModule, MatButtonModule, MatFormFieldModule, MatCardModule, MatTableModule, MatToolbarModule, MatSidenavModule,
    MatIconModule, MatStepperModule, MatMenuModule, MatListModule, MatDividerModule, MatAutocompleteModule,MatInputModule]
})
export class CoreMaterialModule { }
