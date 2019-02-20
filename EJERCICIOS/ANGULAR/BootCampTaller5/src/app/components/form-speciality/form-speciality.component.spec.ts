import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSpecialityComponent } from './form-speciality.component';

describe('FormSpecialityComponent', () => {
  let component: FormSpecialityComponent;
  let fixture: ComponentFixture<FormSpecialityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSpecialityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSpecialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
