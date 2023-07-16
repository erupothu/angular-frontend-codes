import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNoCutCopyPaste]'
})
export class NoCutCopyPasteDirective {

  // @HostListener('select', ['$event']) blockSelect(e: KeyboardEvent) {
  //   e.preventDefault();
  // }
  // @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
  //   e.preventDefault();
  // }

  // @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
  //   e.preventDefault();
  // }

  // @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
  //   e.preventDefault();
  // }
  // @HostListener('selectstart', ['$event']) blockSelectStart(e: KeyboardEvent) {
  //   e.preventDefault();
  // }

  // constructor() { }
  constructor(el: ElementRef, renderer: Renderer2) {
    var events = 'cut copy paste selectstart';
    events.split(' ').forEach(e => 
    renderer.listen(el.nativeElement, e, (event) => {
      event.preventDefault();
      })
    );

  }

}
