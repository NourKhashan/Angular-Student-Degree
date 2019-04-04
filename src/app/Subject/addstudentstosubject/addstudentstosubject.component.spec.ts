import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstudentstosubjectComponent } from './addstudentstosubject.component';

describe('AddstudentstosubjectComponent', () => {
  let component: AddstudentstosubjectComponent;
  let fixture: ComponentFixture<AddstudentstosubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstudentstosubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstudentstosubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
