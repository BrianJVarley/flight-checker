import { TestBed } from '@angular/core/testing';

import { LogFormatterService } from './log-formatter.service';

describe('LogFormatterService', () => {
  let service: LogFormatterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogFormatterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
