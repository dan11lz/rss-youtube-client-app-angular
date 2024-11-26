import { TestBed } from '@angular/core/testing';

import { LoadingBarInterceptor } from './loading.interceptor';

xdescribe('loadingInterceptor', () => {
  let interceptor: LoadingBarInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingBarInterceptor],
    });
    interceptor = TestBed.inject(LoadingBarInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
