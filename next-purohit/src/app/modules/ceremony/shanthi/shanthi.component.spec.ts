import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShanthiComponent } from './shanthi.component';

describe('ShanthiComponent', () => {
  let component: ShanthiComponent;
  let fixture: ComponentFixture<ShanthiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShanthiComponent]
    });
    fixture = TestBed.createComponent(ShanthiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
