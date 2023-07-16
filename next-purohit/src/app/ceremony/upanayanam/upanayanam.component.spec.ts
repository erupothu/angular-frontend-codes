import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpanayanamComponent } from './upanayanam.component';

describe('UpanayanamComponent', () => {
  let component: UpanayanamComponent;
  let fixture: ComponentFixture<UpanayanamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpanayanamComponent]
    });
    fixture = TestBed.createComponent(UpanayanamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
