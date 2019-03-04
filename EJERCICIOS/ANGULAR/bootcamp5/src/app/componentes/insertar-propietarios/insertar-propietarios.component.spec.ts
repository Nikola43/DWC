import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarPropietariosComponent } from './insertar-propietarios.component';

describe('InsertarPropietariosComponent', () => {
  let component: InsertarPropietariosComponent;
  let fixture: ComponentFixture<InsertarPropietariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarPropietariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarPropietariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
