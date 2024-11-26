import { selectCurrentPage, selectCurrentQuery } from './video-cards.selectors';

describe('Video Cards Selectors', () => {
  interface VideoItemResponse {
    id: string;
    snippet: Snippet;
    statistics: Statistics;
  }

  interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnail;
    channelTitle: string;
  }

  interface Thumbnail {
    default: Resolution;
    medium: Resolution;
    high: Resolution;
    standard?: Resolution;
    maxres?: Resolution;
  }

  interface Resolution {
    url: string;
    width: number;
    height: number;
  }

  interface Statistics {
    viewCount: string;
    likeCount: string;
    favoriteCount: string;
    commentCount: string;
  }

  interface CustomCard {
    title: string;
    description?: string;
    image: string;
    video: string;
    date: string;
    tags: string[];
  }

  interface VideoCardsState {
    currentQuery: string;
    youtubeSearchResults: VideoItemResponse[];
    customCards: CustomCard[];
    nextPage: string | null;
    prevPage: string | null;
    currentPage: number;
    isLoading: boolean;
  }

  interface AppState {
    videoCards: VideoCardsState;
  }

  const initialState: AppState = {
    videoCards: {
      currentQuery: 'Angular',
      youtubeSearchResults: [],
      customCards: [],
      nextPage: null,
      prevPage: null,
      currentPage: 1,
      isLoading: false,
    },
  };

  it('should select current query', () => {
    const result = selectCurrentQuery.projector(initialState.videoCards);
    expect(result).toBe('Angular');
  });

  it('should select current page number', () => {
    const state = {
      ...initialState.videoCards,
      currentPage: 2,
    };
    const result = selectCurrentPage.projector(state);
    expect(result).toBe(2);
  });
});
