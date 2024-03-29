import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrologyComponent } from './astrology.component';

describe('AstrologyComponent', () => {
  let component: AstrologyComponent;
  let fixture: ComponentFixture<AstrologyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AstrologyComponent]
    });
    fixture = TestBed.createComponent(AstrologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
