import { TestBed } from '@angular/core/testing';

import { RmApiService } from './rm-api.service';

describe('RmApiService', () => {
  let service: RmApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RmApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
