import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  headings = ['Heading1', 'Heading2', 'Heading3', 'Heading4'];
  selectedHeading = '';

  fonts = this.range(8,45); //Array.from({ length: 5 }, (v, k) => k + 1);
  selectedFont = '';
  allignments = ['left', 'right', 'center', 'justify'];
  selectedAlignment = '';
  colors = ['red', 'blue', 'green','yellow'];
  selectedColorCode = '';
  constructor() { }

  ngOnInit(): void {
  }

  range(start, end) {
    return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
  }

}
