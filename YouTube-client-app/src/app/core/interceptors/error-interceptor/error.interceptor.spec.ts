import { TestBed } from '@angular/core/testing';

import { ErrorInterceptor } from './error.interceptor';

xdescribe('errorInterceptor', () => {
  let interceptor: ErrorInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorInterceptor],
    });
    interceptor = TestBed.inject(ErrorInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
