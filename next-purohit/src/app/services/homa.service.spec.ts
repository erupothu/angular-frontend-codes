import { TestBed } from '@angular/core/testing';

import { HomaService } from './homa.service';

describe('HomaService', () => {
  let service: HomaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
