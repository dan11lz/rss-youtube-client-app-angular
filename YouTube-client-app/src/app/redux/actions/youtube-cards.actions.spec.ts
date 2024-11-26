import * as actions from './youtube-cards.actions';

describe('Youtube Cards Actions', () => {
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

  it('should create searchValue action with query', () => {
    const query = 'angular';
    const action = actions.searchValue({ query });

    expect(action.type).toBe('[Header Input] Load Search Results');
    expect(action.query).toBe(query);
  });

  it('should create loadSearchResultsSuccess action with search results', () => {
    const mockResults: VideoItemResponse[] = [
      {
        id: 'r5DEBMuStPw',
        snippet: {
          publishedAt: '2023-05-05T19:00:20Z',
          channelId: 'UCbn1OgGei-DV7aSRo_HaAiw',
          title: 'How to route in Angular - Learning Angular (Part 5)',
          description: 'Test Description',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/r5DEBMuStPw/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/r5DEBMuStPw/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/r5DEBMuStPw/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Angular',
        },
        statistics: {
          viewCount: '83679',
          likeCount: '1056',
          favoriteCount: '0',
          commentCount: '54',
        },
      },
    ];

    const action = actions.loadSearchResultsSuccess({
      searchResults: mockResults,
      apiNextPageToken: 'next_token',
      apiPrevPageToken: 'prev_token',
    });

    expect(action.type).toBe(
      '[Main Page/YouTube API] Load Search Results Success',
    );
    expect(action.searchResults).toEqual(mockResults);
    expect(action.apiNextPageToken).toBe('next_token');
    expect(action.apiPrevPageToken).toBe('prev_token');
  });

  it('should create loadSearchResultsFailure action', () => {
    const action = actions.loadSearchResultsFailure();
    expect(action.type).toBe(
      '[Main Page/YouTube API] Load Search Results Failure',
    );
  });

  it('should create loadNextPage action', () => {
    const action = actions.loadNextPage();
    expect(action.type).toBe('[Main Page/YouTube API] Load Next Page');
  });

  it('should create loadPrevPage action', () => {
    const action = actions.loadPrevPage();
    expect(action.type).toBe('[Main Page/YouTube API] Load Previous Page');
  });

  it('should create clearState action', () => {
    const action = actions.clearState();
    expect(action.type).toBe('[Header Logout] Clear State');
  });
});
