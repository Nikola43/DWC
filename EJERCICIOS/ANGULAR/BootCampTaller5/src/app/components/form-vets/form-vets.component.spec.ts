import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVetsComponent } from './form-vets.component';

describe('FormVetsComponent', () => {
  let component: FormVetsComponent;
  let fixture: ComponentFixture<FormVetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
