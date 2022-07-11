import { TestBed } from '@angular/core/testing';

import { ViewblogService } from './viewblog.service';

describe('ViewblogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewblogService = TestBed.get(ViewblogService);
    expect(service).toBeTruthy();
  });
});
