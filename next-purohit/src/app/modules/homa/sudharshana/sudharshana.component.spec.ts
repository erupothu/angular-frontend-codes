import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudharshanaComponent } from './sudharshana.component';

describe('SudharshanaComponent', () => {
  let component: SudharshanaComponent;
  let fixture: ComponentFixture<SudharshanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SudharshanaComponent]
    });
    fixture = TestBed.createComponent(SudharshanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
