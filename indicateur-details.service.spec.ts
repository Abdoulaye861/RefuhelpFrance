import { TestBed } from '@angular/core/testing';

import { IndicateurDetailsService } from './indicateur-details.service';

describe('IndicateurDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndicateurDetailsService = TestBed.get(IndicateurDetailsService);
    expect(service).toBeTruthy();
  });
});
