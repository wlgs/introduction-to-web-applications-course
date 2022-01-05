import { TestBed } from '@angular/core/testing';

import { FireBaseServiceService } from './fire-base-service.service';

describe('FireBaseServiceService', () => {
  let service: FireBaseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireBaseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
