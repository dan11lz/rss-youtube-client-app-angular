import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import {
  searchValue,
  loadSearchResultsSuccess,
  loadSearchResultsFailure,
  loadNextPage,
  loadPrevPage,
} from '../actions/youtube-cards.actions';
import { YoutubeService } from '../../youtube/services/youtube/youtube.service';
import {
  DEBOUNCE_TIME_IN_MS,
  MIN_SEARCH_VALUE_LENGTH,
} from '../../shared/constants/constants';
import {
  selectCurrentQuery,
  selectNextPage,
  selectPrevPage,
} from '../selectors/video-cards.selectors';

@Injectable()
export class YoutubeCardsEffects {
  constructor(
    private actions$: Actions,
    private youtubeService: YoutubeService,
    private store: Store,
  ) {}

  loadSearchResults$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchValue),
      map((action) => action.query),
      filter((query) => query.length >= MIN_SEARCH_VALUE_LENGTH),
      debounceTime(DEBOUNCE_TIME_IN_MS),
      distinctUntilChanged(),
      switchMap((query) =>
        this.youtubeService.search$(query).pipe(
          map(({ items, nextPageToken, prevPageToken }) =>
            loadSearchResultsSuccess({
              searchResults: items,
              apiNextPageToken: nextPageToken,
              apiPrevPageToken: prevPageToken,
            }),
          ),
          catchError(() => of(loadSearchResultsFailure())),
        ),
      ),
    ),
  );

  loadNextPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadNextPage),
      withLatestFrom(
        this.store.select(selectCurrentQuery),
        this.store.select(selectNextPage),
      ),
      switchMap(([, query, pageToken]) =>
        this.youtubeService.search$(query, pageToken).pipe(
          map(({ items, nextPageToken, prevPageToken }) =>
            loadSearchResultsSuccess({
              searchResults: items,
              apiNextPageToken: nextPageToken,
              apiPrevPageToken: prevPageToken,
            }),
          ),
          catchError(() => of(loadSearchResultsFailure())),
        ),
      ),
    ),
  );

  loadPrevPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPrevPage),
      withLatestFrom(
        this.store.select(selectCurrentQuery),
        this.store.select(selectPrevPage),
      ),
      switchMap(([, query, pageToken]) =>
        this.youtubeService.search$(query, pageToken).pipe(
          map(({ items, nextPageToken, prevPageToken }) =>
            loadSearchResultsSuccess({
              searchResults: items,
              apiNextPageToken: nextPageToken,
              apiPrevPageToken: prevPageToken,
            }),
          ),
          catchError(() => of(loadSearchResultsFailure())),
        ),
      ),
    ),
  );
}
