import { TestBed, inject } from '@angular/core/testing';

import { CarrerasService } from './carreras.service';

describe('CarrerasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarrerasService]
    });
  });

  it('should be created', inject([CarrerasService], (service: CarrerasService) => {
    expect(service).toBeTruthy();
  }));
});
