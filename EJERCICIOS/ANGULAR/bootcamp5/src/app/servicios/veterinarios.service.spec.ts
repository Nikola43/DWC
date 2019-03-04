import { TestBed } from '@angular/core/testing';

import { VeterinariosService } from './veterinarios.service';

describe('VeterinariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VeterinariosService = TestBed.get(VeterinariosService);
    expect(service).toBeTruthy();
  });
});
