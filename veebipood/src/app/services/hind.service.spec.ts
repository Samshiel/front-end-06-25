import { TestBed } from '@angular/core/testing';

import { HindService } from './hind.service';

describe('HindService', () => {
  let service: HindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
