import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesSaveComponent } from './categories-save.component';

describe('CategoriesSaveComponent', () => {
  let component: CategoriesSaveComponent;
  let fixture: ComponentFixture<CategoriesSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
