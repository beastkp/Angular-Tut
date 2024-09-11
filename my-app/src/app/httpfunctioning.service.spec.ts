import { TestBed } from '@angular/core/testing';

import { HttpfunctioningService } from './httpfunctioning.service';

describe('HttpfunctioningService', () => {
  let service: HttpfunctioningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpfunctioningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
