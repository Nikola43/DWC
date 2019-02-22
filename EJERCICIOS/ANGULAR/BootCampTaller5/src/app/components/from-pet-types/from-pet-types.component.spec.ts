import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromPetTypesComponent } from './from-pet-types.component';

describe('FromPetTypesComponent', () => {
  let component: FromPetTypesComponent;
  let fixture: ComponentFixture<FromPetTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromPetTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromPetTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
