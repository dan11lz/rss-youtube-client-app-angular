import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private isFilteringDashboardOpen = signal<boolean>(false);

  public changeDashboardState(): void {
    this.isFilteringDashboardOpen.update((value) => !value);
  }

  public get isDashboardOpenState(): boolean {
    return this.isFilteringDashboardOpen();
  }
}
