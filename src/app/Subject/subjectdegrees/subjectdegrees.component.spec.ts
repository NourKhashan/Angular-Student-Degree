import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectdegreesComponent } from './subjectdegrees.component';

describe('SubjectdegreesComponent', () => {
  let component: SubjectdegreesComponent;
  let fixture: ComponentFixture<SubjectdegreesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectdegreesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectdegreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
