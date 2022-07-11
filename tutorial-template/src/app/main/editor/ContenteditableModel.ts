import { Directive, ElementRef, Input, Output } from "@angular/core";
import { OnChanges, EventEmitter, SimpleChanges, OnInit, HostListener } from "@angular/core";

@Directive({
  selector: '[contenteditableModel]'
})
export class ContenteditableModel implements OnInit {
  @Input('contenteditableModel') model: any;
  @Output('contenteditableModelChange') update = new EventEmitter();

  public constructor(private elRef: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('keypress', ['$event']) public handleKeyDown(e: KeyboardEvent) {

    // Only listen for plain returns
    if (e.which != 13) {
      return;
    }

    e.preventDefault(); // Prevent the <div /> creation.
    let doc_fragment = document.createDocumentFragment();

    // Create a new break element
    let new_ele = document.createTextNode('\r\n');
    doc_fragment.appendChild(new_ele);

    // Get the current selection, and make sure the content is removed (if any)
    let selection = window.getSelection();
    let range = selection.getRangeAt(0);

    range.insertNode(doc_fragment);

    //make the cursor there
    let sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);

    range.collapse(false);
  }

  @HostListener('blur', ['$event']) public onBlur() {
    this.updateModel();
  }

  private updateModel(): void {
    var value = this.elRef.nativeElement.innerText;
    this.update.emit(value);
  }
}