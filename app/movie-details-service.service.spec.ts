import { TestBed, inject } from '@angular/core/testing';

import { MovieDetailsServiceService } from './movie-details-service.service';

describe('MovieDetailsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieDetailsServiceService]
    });
  });

  it('should be created', inject([MovieDetailsServiceService], (service: MovieDetailsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
