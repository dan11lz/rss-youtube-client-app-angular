import { createAction, props } from '@ngrx/store';
import { VideoItemResponse } from '../../youtube/interfaces/video-list-response.interface';

export const searchValue = createAction(
  '[Header Input] Load Search Results',
  props<{ query: string }>(),
);

export const loadSearchResultsSuccess = createAction(
  '[Main Page/YouTube API] Load Search Results Success',
  props<{
    searchResults: VideoItemResponse[];
    apiNextPageToken: string | null;
    apiPrevPageToken: string | null;
  }>(),
);

export const loadSearchResultsFailure = createAction(
  '[Main Page/YouTube API] Load Search Results Failure',
);

export const loadNextPage = createAction(
  '[Main Page/YouTube API] Load Next Page',
);

export const loadPrevPage = createAction(
  '[Main Page/YouTube API] Load Previous Page',
);

export const clearState = createAction('[Header Logout] Clear State');
