import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoMascotaComponent } from './listar-tipo-mascota.component';

describe('ListarTipoMascotaComponent', () => {
  let component: ListarTipoMascotaComponent;
  let fixture: ComponentFixture<ListarTipoMascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTipoMascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTipoMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
