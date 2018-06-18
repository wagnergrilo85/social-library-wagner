import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksViewComponent } from './books-view.component';

describe('BooksViewComponent', () => {
  let component: BooksViewComponent;
  let fixture: ComponentFixture<BooksViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
