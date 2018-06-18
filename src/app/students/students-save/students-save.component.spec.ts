import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsSaveComponent } from './students-save.component';

describe('StudentsSaveComponent', () => {
  let component: StudentsSaveComponent;
  let fixture: ComponentFixture<StudentsSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
