import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JyothisyamComponent } from './jyothisyam.component';

describe('JyothisyamComponent', () => {
  let component: JyothisyamComponent;
  let fixture: ComponentFixture<JyothisyamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JyothisyamComponent]
    });
    fixture = TestBed.createComponent(JyothisyamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
