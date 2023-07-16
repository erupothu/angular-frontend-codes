import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RudraComponent } from './rudra.component';

describe('RudraComponent', () => {
  let component: RudraComponent;
  let fixture: ComponentFixture<RudraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RudraComponent]
    });
    fixture = TestBed.createComponent(RudraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
