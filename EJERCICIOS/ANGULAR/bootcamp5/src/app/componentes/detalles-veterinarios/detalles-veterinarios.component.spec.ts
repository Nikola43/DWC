import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesVeterinariosComponent } from './detalles-veterinarios.component';

describe('DetallesVeterinariosComponent', () => {
  let component: DetallesVeterinariosComponent;
  let fixture: ComponentFixture<DetallesVeterinariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesVeterinariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesVeterinariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
