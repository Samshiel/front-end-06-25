import { TestBed } from '@angular/core/testing';

import { TootajaService } from './tootaja.service';

describe('TootajaService', () => {
  let service: TootajaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TootajaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
