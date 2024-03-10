import { TestBed } from '@angular/core/testing';

import { DuendeService } from './duende.service';

describe('DuendeService', () => {
  let service: DuendeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuendeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
