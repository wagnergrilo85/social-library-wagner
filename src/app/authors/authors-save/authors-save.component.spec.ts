import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsSaveComponent } from './authors-save.component';

describe('AuthorsSaveComponent', () => {
  let component: AuthorsSaveComponent;
  let fixture: ComponentFixture<AuthorsSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
