import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { YoutubeService } from '../../services/youtube/youtube.service';
import {
  selectCombinedResults,
  selectCurrentPage,
  selectHasResults,
  selectIsLoading,
  selectNextPage,
  selectPrevPage,
} from '../../../redux/selectors/video-cards.selectors';
import {
  loadNextPage,
  loadPrevPage,
} from '../../../redux/actions/youtube-cards.actions';
import { deleteCustomCard } from '../../../redux/actions/custom-cards.actions';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent {
  public filterValue = this.youtubeService.getFilterValue;

  public cardsList$ = this.store.select(selectCombinedResults);

  public hasResults$ = this.store.select(selectHasResults);

  public hasNextPage$ = this.store.select(selectNextPage);

  public hasPrevPage$ = this.store.select(selectPrevPage);

  public currentPage$ = this.store.select(selectCurrentPage);

  public isLoading = toSignal(this.store.select(selectIsLoading), {
    initialValue: false,
  });

  constructor(
    private youtubeService: YoutubeService,
    private viewportScroller: ViewportScroller,
    private store: Store,
  ) {}

  public get currentSortType() {
    return this.youtubeService.sortTypeValue;
  }

  public get currentSortOrder() {
    return this.youtubeService.sortOrderValue;
  }

  public onNextPage(): void {
    this.store.dispatch(loadNextPage());
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  public onPrevPage(): void {
    this.store.dispatch(loadPrevPage());
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  public deleteCustomCard(index: number): void {
    this.store.dispatch(deleteCustomCard({ cardId: index }));
  }
}
