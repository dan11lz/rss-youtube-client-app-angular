import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { LoadingBarService } from './loading-bar.service';

describe('LoadingBarService', () => {
  let service: LoadingBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initial loading state as false', async () => {
    const initialState = await firstValueFrom(service.isLoadingBarShown$());
    expect(initialState).toBe(false);
  });

  it('should set loading state to true', async () => {
    service.showLoading();
    const result = await firstValueFrom(service.isLoadingBarShown$());
    expect(result).toBe(true);
  });

  it('should set loading state to false', async () => {
    service.showLoading();
    service.hideLoading();
    const result = await firstValueFrom(service.isLoadingBarShown$());
    expect(result).toBe(false);
  });
});
