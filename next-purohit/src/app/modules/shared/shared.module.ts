import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { NoRightClickDirective } from './no-right-click.directive';
import { NoCutCopyPasteDirective } from './no-cut-copy-paste.directive';



@NgModule({
  declarations: [
    HighlightDirective,
    NoRightClickDirective,
    NoCutCopyPasteDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    NoRightClickDirective,
    NoCutCopyPasteDirective
  ]
})
export class SharedModule { }
