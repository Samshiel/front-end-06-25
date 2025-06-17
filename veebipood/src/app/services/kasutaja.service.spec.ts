import { TestBed } from '@angular/core/testing';

import { KasutajaService } from './kasutaja.service';

describe('KasutajaService', () => {
  let service: KasutajaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KasutajaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
