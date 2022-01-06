import { TestBed } from '@angular/core/testing';

import { LoginTwiceGuard } from './login-twice.guard';

describe('LoginTwiceGuard', () => {
  let guard: LoginTwiceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginTwiceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
