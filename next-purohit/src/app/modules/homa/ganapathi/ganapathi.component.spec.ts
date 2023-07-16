import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanapathiComponent } from './ganapathi.component';

describe('GanapathiComponent', () => {
  let component: GanapathiComponent;
  let fixture: ComponentFixture<GanapathiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GanapathiComponent]
    });
    fixture = TestBed.createComponent(GanapathiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
