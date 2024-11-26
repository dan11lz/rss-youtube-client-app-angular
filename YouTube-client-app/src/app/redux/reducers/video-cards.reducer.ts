import { createReducer, on } from '@ngrx/store';
import {
  loadSearchResultsSuccess,
  loadSearchResultsFailure,
  searchValue,
  loadNextPage,
  loadPrevPage,
  clearState,
} from '../actions/youtube-cards.actions';
import { VideoItemResponse } from '../../youtube/interfaces/video-list-response.interface';
import { CustomCard } from '../../youtube/interfaces/custom-card.interface';
import {
  createCustomCard,
  deleteCustomCard,
} from '../actions/custom-cards.actions';

export interface VideoCardsState {
  currentQuery: string;
  youtubeSearchResults: VideoItemResponse[];
  customCards: CustomCard[];
  nextPage: string | null;
  prevPage: string | null;
  currentPage: number;
  isLoading: boolean;
}

export const initialState: VideoCardsState = {
  currentQuery: '',
  youtubeSearchResults: [],
  customCards: [],
  nextPage: null,
  prevPage: null,
  currentPage: 1,
  isLoading: false,
};

export const videoCardsReducer = createReducer(
  initialState,
  on(searchValue, (currentState, { query }) => ({
    ...currentState,
    currentQuery: query,
    currentPage: 1,
    isLoading: true,
  })),
  on(
    loadSearchResultsSuccess,
    (currentState, { searchResults, apiNextPageToken, apiPrevPageToken }) => ({
      ...currentState,
      youtubeSearchResults: [...searchResults],
      nextPage: apiNextPageToken,
      prevPage: apiPrevPageToken,
      isLoading: false,
    }),
  ),
  on(loadNextPage, (currentState) => ({
    ...currentState,
    currentPage: currentState.currentPage + 1,
    isLoading: true,
  })),
  on(loadPrevPage, (currentState) => ({
    ...currentState,
    currentPage: currentState.currentPage - 1,
    isLoading: true,
  })),
  on(loadSearchResultsFailure, (currentState) => currentState),
  on(createCustomCard, (currentState, { card }) => ({
    ...currentState,
    customCards: [...currentState.customCards, card],
  })),
  on(deleteCustomCard, (currentState, { cardId }) => {
    const updatedCards = [...currentState.customCards];
    updatedCards.splice(cardId, 1);
    return {
      ...currentState,
      customCards: updatedCards,
    };
  }),
  on(clearState, () => ({ ...initialState })),
);
