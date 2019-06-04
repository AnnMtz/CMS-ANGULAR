import { TestBed } from '@angular/core/testing';

import { JuswhoService } from './juswho.service';

describe('JuswhoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JuswhoService = TestBed.get(JuswhoService);
    expect(service).toBeTruthy();
  });
});
