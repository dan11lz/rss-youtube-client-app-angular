import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

import { CoreService } from '../../../core/services/core/core.service';
import { YoutubeService } from '../../services/youtube/youtube.service';

import { SortTypes } from '../../../shared/constants/constants';

@Component({
  selector: 'app-filtering-dashboard',
  templateUrl: './filtering-dashboard.component.html',
  styleUrl: './filtering-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('zoomIn', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('0.1s ease-in', style({ transform: 'scale(1)' })),
      ]),
    ]),
    trigger('flipIcon', [
      state('asc', style({ transform: 'scaleY(-1)' })),
      state('desc', style({ transform: 'scaleY(1)' })),
      transition('asc <=> desc', [animate('0.1s ease-in-out')]),
    ]),
  ],
})
export class FilteringDashboardComponent {
  public SortTypes = SortTypes;

  constructor(
    private coreService: CoreService,
    private youtubeService: YoutubeService,
  ) {}

  public get isDashboardOpen(): boolean {
    return this.coreService.isDashboardOpenState;
  }

  public get filterInput(): string {
    return this.youtubeService.getFilterValue();
  }

  public set filterInput(value: string) {
    this.youtubeService.setFilterValue(value);
  }

  public sortByDate() {
    this.youtubeService.setSortType(SortTypes.DATE);
    this.youtubeService.toggleSortOrder();
  }

  public sortByViews() {
    this.youtubeService.setSortType(SortTypes.VIEWS);
    this.youtubeService.toggleSortOrder();
  }

  public get currentSortType() {
    return this.youtubeService.sortTypeValue;
  }

  public get currentSortOrder() {
    return this.youtubeService.sortOrderValue;
  }
}
