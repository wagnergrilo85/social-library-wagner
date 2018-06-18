import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishingSaveComponent } from './publishing-save.component';

describe('PublishingSaveComponent', () => {
  let component: PublishingSaveComponent;
  let fixture: ComponentFixture<PublishingSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishingSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishingSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
