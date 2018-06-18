import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSaveComponent } from './users-save.component';

describe('UsersSaveComponent', () => {
  let component: UsersSaveComponent;
  let fixture: ComponentFixture<UsersSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
