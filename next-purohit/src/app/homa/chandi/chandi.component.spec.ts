import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChandiComponent } from './chandi.component';

describe('ChandiComponent', () => {
  let component: ChandiComponent;
  let fixture: ComponentFixture<ChandiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChandiComponent]
    });
    fixture = TestBed.createComponent(ChandiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
