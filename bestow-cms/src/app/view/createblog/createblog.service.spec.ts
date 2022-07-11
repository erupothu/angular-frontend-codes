import { TestBed } from '@angular/core/testing';

import { CreateblogService } from './createblog.service';

describe('CreateblogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateblogService = TestBed.get(CreateblogService);
    expect(service).toBeTruthy();
  });
});
