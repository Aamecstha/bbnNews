import { TestBed } from '@angular/core/testing';

import { BbcNewsService } from './bbc-news.service';

describe('BbcNewsService', () => {
  let service: BbcNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BbcNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
