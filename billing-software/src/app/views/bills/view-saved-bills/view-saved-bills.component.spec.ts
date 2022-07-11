import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSavedBillsComponent } from './view-saved-bills.component';

describe('ViewSavedBillsComponent', () => {
  let component: ViewSavedBillsComponent;
  let fixture: ComponentFixture<ViewSavedBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSavedBillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSavedBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
