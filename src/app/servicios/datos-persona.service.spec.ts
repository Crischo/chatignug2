import { TestBed, inject } from '@angular/core/testing';

import { DatosPersonaService } from './datos-persona.service';

describe('DatosPersonaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatosPersonaService]
    });
  });

  it('should be created', inject([DatosPersonaService], (service: DatosPersonaService) => {
    expect(service).toBeTruthy();
  }));
});
