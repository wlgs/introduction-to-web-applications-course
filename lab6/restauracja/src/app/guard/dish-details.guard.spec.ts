import { TestBed } from '@angular/core/testing';

import { DishDetailsGuard } from './dish-details.guard';

describe('DishDetailsGuard', () => {
  let guard: DishDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DishDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
