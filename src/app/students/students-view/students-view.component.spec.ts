import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsViewComponent } from './students-view.component';

describe('StudentsViewComponent', () => {
  let component: StudentsViewComponent;
  let fixture: ComponentFixture<StudentsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
