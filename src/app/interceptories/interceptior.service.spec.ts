import { TestBed } from '@angular/core/testing';

import { InterceptiorService } from './interceptior.service';

describe('InterceptiorService', () => {
  let service: InterceptiorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptiorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
