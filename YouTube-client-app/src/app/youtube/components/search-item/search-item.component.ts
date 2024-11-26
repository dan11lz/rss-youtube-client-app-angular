import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { VideoItemResponse } from '../../interfaces/video-list-response.interface';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchItemComponent {
  @Input() item!: VideoItemResponse;
}
