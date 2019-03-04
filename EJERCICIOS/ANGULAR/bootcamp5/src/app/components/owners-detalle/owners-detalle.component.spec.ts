import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersDetalleComponent } from './owners-detalle.component';

describe('OwnersDetalleComponent', () => {
  let component: OwnersDetalleComponent;
  let fixture: ComponentFixture<OwnersDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnersDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnersDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
