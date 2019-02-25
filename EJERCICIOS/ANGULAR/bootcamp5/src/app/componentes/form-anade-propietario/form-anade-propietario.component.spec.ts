import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAnadePropietarioComponent } from './form-anade-propietario.component';

describe('FormAnadePropietarioComponent', () => {
  let component: FormAnadePropietarioComponent;
  let fixture: ComponentFixture<FormAnadePropietarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAnadePropietarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAnadePropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
