import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavagrahaComponent } from './navagraha.component';

describe('NavagrahaComponent', () => {
  let component: NavagrahaComponent;
  let fixture: ComponentFixture<NavagrahaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavagrahaComponent]
    });
    fixture = TestBed.createComponent(NavagrahaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
