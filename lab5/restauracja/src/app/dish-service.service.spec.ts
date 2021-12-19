import { TestBed } from '@angular/core/testing';

import { DishServiceService } from './dish-service.service';

describe('DishServiceService', () => {
  let service: DishServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
