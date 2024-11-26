import { TestBed } from '@angular/core/testing';

import { UrlInterceptor } from './url.interceptor';

xdescribe('urlInterceptor', () => {
  let interceptor: UrlInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlInterceptor],
    });
    interceptor = TestBed.inject(UrlInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
