export interface SearchItemResult {
  kind: string;
  etag: string;
  id: Id;
  snippet: Snippet;
  statistics: Statistics;
}

export interface Id {
  videoId: string;
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
