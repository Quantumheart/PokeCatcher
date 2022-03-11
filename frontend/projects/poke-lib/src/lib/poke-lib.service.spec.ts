import { TestBed } from '@angular/core/testing';

import { PokeLibService } from './poke-lib.service';

describe('PokeLibService', () => {
  let service: PokeLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
