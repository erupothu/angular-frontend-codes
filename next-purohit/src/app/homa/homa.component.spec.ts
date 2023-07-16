import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomaComponent } from './homa.component';

describe('HomaComponent', () => {
  let component: HomaComponent;
  let fixture: ComponentFixture<HomaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomaComponent]
    });
    fixture = TestBed.createComponent(HomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
