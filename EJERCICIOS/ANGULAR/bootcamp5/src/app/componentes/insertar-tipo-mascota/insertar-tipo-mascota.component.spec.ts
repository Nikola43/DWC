import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarTipoMascotaComponent } from './insertar-tipo-mascota.component';

describe('InsertarTipoMascotaComponent', () => {
  let component: InsertarTipoMascotaComponent;
  let fixture: ComponentFixture<InsertarTipoMascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarTipoMascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarTipoMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
