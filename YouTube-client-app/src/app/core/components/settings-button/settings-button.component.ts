import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CoreService } from '../../services/core/core.service';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrl: './settings-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsButtonComponent {
  constructor(private coreService: CoreService) {}

  public toggleFilteringDashboard() {
    this.coreService.changeDashboardState();
  }
}
