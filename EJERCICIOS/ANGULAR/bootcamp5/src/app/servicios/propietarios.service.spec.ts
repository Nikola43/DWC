import { TestBed } from '@angular/core/testing';

import { PropietariosService } from './propietarios.service';

describe('PropietariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropietariosService = TestBed.get(PropietariosService);
    expect(service).toBeTruthy();
  });
});
