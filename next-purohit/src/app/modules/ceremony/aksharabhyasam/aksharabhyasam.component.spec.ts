import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AksharabhyasamComponent } from './aksharabhyasam.component';

describe('AksharabhyasamComponent', () => {
  let component: AksharabhyasamComponent;
  let fixture: ComponentFixture<AksharabhyasamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AksharabhyasamComponent]
    });
    fixture = TestBed.createComponent(AksharabhyasamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
