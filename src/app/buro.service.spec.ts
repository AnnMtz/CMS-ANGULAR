import { TestBed } from '@angular/core/testing';

import { BuroService } from './buro.service';

describe('BuroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuroService = TestBed.get(BuroService);
    expect(service).toBeTruthy();
  });
});
