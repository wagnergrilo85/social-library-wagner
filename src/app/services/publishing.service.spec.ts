import { TestBed, inject } from '@angular/core/testing';

import { PublishingService } from './publishing.service';

describe('PublishingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublishingService]
    });
  });

  it('should be created', inject([PublishingService], (service: PublishingService) => {
    expect(service).toBeTruthy();
  }));
});
