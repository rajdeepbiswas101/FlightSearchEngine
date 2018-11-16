import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'

import { FlightSearchService } from './flight-search.service';

describe('FlightSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule]
  }));

  it('should be created', () => {
    const service: FlightSearchService = TestBed.get(FlightSearchService);
    expect(service).toBeTruthy();
  });
});
