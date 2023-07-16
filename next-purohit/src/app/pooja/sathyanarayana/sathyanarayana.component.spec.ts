import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SathyanarayanaComponent } from './sathyanarayana.component';

describe('SathyanarayanaComponent', () => {
  let component: SathyanarayanaComponent;
  let fixture: ComponentFixture<SathyanarayanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SathyanarayanaComponent]
    });
    fixture = TestBed.createComponent(SathyanarayanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
