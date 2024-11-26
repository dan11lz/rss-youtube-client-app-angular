import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VideoCardsState } from '../reducers/video-cards.reducer';
import { CustomCard } from '../../youtube/interfaces/custom-card.interface';
import { VideoItemResponse } from '../../youtube/interfaces/video-list-response.interface';

export const selectYoutubeCardsState =
  createFeatureSelector<VideoCardsState>('videoCards');

export const selectYoutubeCardsResults = createSelector(
  selectYoutubeCardsState,
  (state: VideoCardsState) => state.youtubeSearchResults,
);

export const selectHasResults = createSelector(
  selectYoutubeCardsState,
  (state: VideoCardsState) => state.youtubeSearchResults.length > 0,
);

export const selectCurrentQuery = createSelector(
  selectYoutubeCardsState,
  (state: VideoCardsState) => state.currentQuery,
);

export const selectNextPage = createSelector(
  selectYoutubeCardsState,
  (state: VideoCardsState) => state.nextPage,
);

export const selectPrevPage = createSelector(
  selectYoutubeCardsState,
  (state: VideoCardsState) => state.prevPage,
);

export const selectCurrentPage = createSelector(
  selectYoutubeCardsState,
  (state: VideoCardsState) => state.currentPage,
);

export const selectIsLoading = createSelector(
  selectYoutubeCardsState,
  (state: VideoCardsState) => state.isLoading,
);

export const selectCustomCards = createSelector(
  selectYoutubeCardsState,
  (state: VideoCardsState) => state.customCards,
);

export const selectCustomCardsMaxLimit = createSelector(
  selectYoutubeCardsState,
  (state: VideoCardsState) => state.customCards.length < 20,
);

export const selectCombinedResults = createSelector(
  selectYoutubeCardsResults,
  selectCustomCards,
  selectCurrentPage,
  (
    youtubeResults: VideoItemResponse[],
    customCards: CustomCard[],
    currentPage: number,
  ) => {
    if (currentPage === 1) {
      const availableSpots = 20 - customCards.length;
      return {
        youtubeResults: youtubeResults.slice(0, availableSpots),
        customCards,
      };
    }
    return {
      youtubeResults,
      customCards: [],
    };
  },
);

export const selectCustomCardByIndex = (index: number) =>
  createSelector(selectCustomCards, (cards: CustomCard[]) => cards[index - 1]);
