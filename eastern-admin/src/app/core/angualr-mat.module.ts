import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatDividerModule,
  MatFormFieldModule, MatTreeModule, MatSelectModule
} from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule,
    MatDividerModule, MatFormFieldModule, MatTreeModule, MatSelectModule
  ], exports: [
    MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatDividerModule,
    MatFormFieldModule, MatTreeModule,MatSelectModule
  ]
})
export class AngualrMatModule { }
