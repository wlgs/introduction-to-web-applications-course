import { TestBed } from '@angular/core/testing';

import { BasketInfoService } from './basket-info.service';

describe('BasketInfoService', () => {
  let service: BasketInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasketInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
