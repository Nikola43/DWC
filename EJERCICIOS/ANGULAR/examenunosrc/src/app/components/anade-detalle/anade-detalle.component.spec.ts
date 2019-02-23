import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadeDetalleComponent } from './anade-detalle.component';

describe('AnadeDetalleComponent', () => {
  let component: AnadeDetalleComponent;
  let fixture: ComponentFixture<AnadeDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadeDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadeDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
