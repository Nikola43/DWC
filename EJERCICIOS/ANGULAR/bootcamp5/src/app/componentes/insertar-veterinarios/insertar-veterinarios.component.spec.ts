import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarVeterinariosComponent } from './insertar-veterinarios.component';

describe('InsertarVeterinariosComponent', () => {
  let component: InsertarVeterinariosComponent;
  let fixture: ComponentFixture<InsertarVeterinariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarVeterinariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarVeterinariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
