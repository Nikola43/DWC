import { TestBed } from '@angular/core/testing';

import { ServicioPropietariosService } from './servicio-propietarios.service';

describe('ServicioPropietariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioPropietariosService = TestBed.get(ServicioPropietariosService);
    expect(service).toBeTruthy();
  });
});
