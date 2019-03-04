import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTipoMascotaComponent } from './detalle-tipo-mascota.component';

describe('DetalleTipoMascotaComponent', () => {
  let component: DetalleTipoMascotaComponent;
  let fixture: ComponentFixture<DetalleTipoMascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleTipoMascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTipoMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
