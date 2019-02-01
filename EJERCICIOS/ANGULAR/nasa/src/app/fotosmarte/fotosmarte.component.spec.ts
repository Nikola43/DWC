import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosmarteComponent } from './fotosmarte.component';

describe('FotosmarteComponent', () => {
  let component: FotosmarteComponent;
  let fixture: ComponentFixture<FotosmarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotosmarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotosmarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
