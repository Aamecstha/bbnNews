import { TestBed } from '@angular/core/testing';

import { SubscriberCountService } from './subscriber-count.service';

describe('SubscriberCountService', () => {
  let service: SubscriberCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscriberCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
