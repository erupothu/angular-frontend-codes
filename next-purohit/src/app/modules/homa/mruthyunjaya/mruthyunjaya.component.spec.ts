import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MruthyunjayaComponent } from './mruthyunjaya.component';

describe('MruthyunjayaComponent', () => {
  let component: MruthyunjayaComponent;
  let fixture: ComponentFixture<MruthyunjayaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MruthyunjayaComponent]
    });
    fixture = TestBed.createComponent(MruthyunjayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
