export interface VideoListResponse {
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: VideoItemResponse[];
}

export interface VideoItemResponse {
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnail;
  channelTitle: string;
}

export interface Thumbnail {
  default: Resolution;
  medium: Resolution;
  high: Resolution;
  standard?: Resolution;
  maxres?: Resolution;
}

export interface Resolution {
  url: string;
  width: number;
  height: number;
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}
