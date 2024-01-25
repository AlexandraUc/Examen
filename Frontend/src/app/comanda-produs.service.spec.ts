import { TestBed } from '@angular/core/testing';

import { ComandaProdusService } from './comanda-produs.service';

describe('ComandaProdusService', () => {
  let service: ComandaProdusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComandaProdusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
