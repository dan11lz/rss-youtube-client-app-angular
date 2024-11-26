import { VideoItemResponse } from '../interfaces/video-list-response.interface';

export const YOUTUBE_API = {
  BASE: 'https://www.googleapis.com/youtube/v3/',
  SEARCH: 'search?part=snippet&maxResults=20&type=video&q=',
  VIDEOS: 'videos?part=snippet,statistics&id=',
};

// export const YOUTUBE_API_TOKEN: string =
//   'AIzaSyAi5plb4yHwCK--i1Y-GcVEaraZaHgRCEk';

// export const YOUTUBE_API_TOKEN: string =
//   'AIzaSyBe3y3lEH2uK43TVpqu7hZ7Nw-vNn-4nU8';

export const YOUTUBE_API_TOKEN: string =
  'AIzaSyAq_HRQYKjJrz84hM4RNh4cXrV8capWNLY';

export const EMPTY_VIDEO_ITEM_RESPONSE: VideoItemResponse = {
  id: '',
  snippet: {
    publishedAt: '',
    channelId: '',
    title: '',
    description: '',
    thumbnails: {
      default: {
        url: '',
        width: 0,
        height: 0,
      },
      medium: {
        url: '',
        width: 0,
        height: 0,
      },
      high: {
        url: '',
        width: 0,
        height: 0,
      },
      standard: {
        url: '',
        width: 0,
        height: 0,
      },
      maxres: {
        url: '',
        width: 0,
        height: 0,
      },
    },
    channelTitle: '',
  },
  statistics: {
    viewCount: '',
    likeCount: '',
    favoriteCount: '',
    commentCount: '',
  },
};
