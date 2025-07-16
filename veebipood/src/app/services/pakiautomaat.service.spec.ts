import { TestBed } from '@angular/core/testing';

import { PakiautomaatService } from './pakiautomaat.service';

describe('PakiautomaatService', () => {
  let service: PakiautomaatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PakiautomaatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
