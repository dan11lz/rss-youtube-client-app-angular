import { SearchItemResult } from './search-item.interface';

export interface SearchListResponse {
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: SearchItemResult[];
}
