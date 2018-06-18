import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishingViewComponent } from './publishing-view.component';

describe('PublishingViewComponent', () => {
  let component: PublishingViewComponent;
  let fixture: ComponentFixture<PublishingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
