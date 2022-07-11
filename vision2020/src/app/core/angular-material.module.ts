import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatSnackBarModule, MatToolbarModule,
MatSidenavModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatInputModule, MatButtonModule, MatSnackBarModule, MatFormFieldModule, MatToolbarModule, MatSidenavModule,
     MatIconModule, MatCardModule, FlexLayoutModule
  ], exports: [
    MatButtonModule, MatInputModule, MatSnackBarModule, MatFormFieldModule, MatToolbarModule, MatSidenavModule, MatIconModule,
     MatCardModule, FlexLayoutModule
  ]
})
export class AngularMaterialModule {}
