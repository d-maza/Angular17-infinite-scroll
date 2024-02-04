import { TestBed } from '@angular/core/testing';

import { RmApiService } from './rm-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('RmApiService', () => {
  let service: RmApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(RmApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
