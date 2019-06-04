import { TestBed } from '@angular/core/testing';

import { BrokrsService } from './brokrs.service';

describe('BrokrsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrokrsService = TestBed.get(BrokrsService);
    expect(service).toBeTruthy();
  });
});
