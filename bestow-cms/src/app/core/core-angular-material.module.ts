import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatToolbarModule, MatSidenavModule,
   MatSnackBarModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatCardModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatToolbarModule, MatSnackBarModule,
    MatSidenavModule
  ], exports: [
    MatCardModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatToolbarModule, MatSnackBarModule, MatSidenavModule
  ]
})
export class CoreAngularMaterialModule { }
