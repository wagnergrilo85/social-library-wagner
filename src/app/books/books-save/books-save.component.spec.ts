import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksSaveComponent } from './books-save.component';

describe('BooksSaveComponent', () => {
  let component: BooksSaveComponent;
  let fixture: ComponentFixture<BooksSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
