import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { LoadingBarService } from '../../services/loading-bar/loading-bar.service';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrl: './loading-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingBarComponent {
  public loading$: Observable<boolean> =
    this.loadingBarService.isLoadingBarShown$();

  constructor(private loadingBarService: LoadingBarService) {}
}
