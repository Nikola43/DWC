import { TestBed } from '@angular/core/testing';

import { TiposMascotasService } from './tipos-mascotas.service';

describe('TiposMascotasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TiposMascotasService = TestBed.get(TiposMascotasService);
    expect(service).toBeTruthy();
  });
});
