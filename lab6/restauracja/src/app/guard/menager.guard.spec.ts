import { TestBed } from '@angular/core/testing';

import { MenagerGuard } from './menager.guard';

describe('MenagerGuard', () => {
  let guard: MenagerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MenagerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
