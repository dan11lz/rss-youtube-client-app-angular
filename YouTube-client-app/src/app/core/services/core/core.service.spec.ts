import { TestBed } from '@angular/core/testing';

import { CoreService } from './core.service';

describe('StateService', () => {
  let service: CoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initial dashboard state as false', () => {
    expect(service.isDashboardOpenState).toBe(false);
  });

  it('should toggle dashboard state from false to true', () => {
    service.changeDashboardState();
    expect(service.isDashboardOpenState).toBe(true);
  });

  it('should toggle dashboard state multiple times correctly', () => {
    expect(service.isDashboardOpenState).toBe(false);

    service.changeDashboardState();
    expect(service.isDashboardOpenState).toBe(true);

    service.changeDashboardState();
    expect(service.isDashboardOpenState).toBe(false);

    service.changeDashboardState();
    expect(service.isDashboardOpenState).toBe(true);
  });
});
