import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillPrintDialogComponent } from './bill-print-dialog.component';

describe('BillPrintDialogComponent', () => {
  let component: BillPrintDialogComponent;
  let fixture: ComponentFixture<BillPrintDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillPrintDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillPrintDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
