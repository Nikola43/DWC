import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePropietariosComponent } from './detalle-propietarios.component';

describe('DetallePropietariosComponent', () => {
  let component: DetallePropietariosComponent;
  let fixture: ComponentFixture<DetallePropietariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePropietariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePropietariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
