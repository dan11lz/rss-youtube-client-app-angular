import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { SortTypes, SortOrders } from '../../../shared/constants/constants';
import { SearchListResponse } from '../../interfaces/search-response.interface';
import { YOUTUBE_API } from '../../constants/constants';
import {
  VideoListResponse,
  VideoItemResponse,
} from '../../interfaces/video-list-response.interface';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private filterValue = signal('');

  private sortOrder = signal(SortOrders.UNSET);

  private sortType = signal(SortTypes.UNSET);

  constructor(private http: HttpClient) {}

  public get getFilterValue() {
    return this.filterValue;
  }

  public setFilterValue(value: string) {
    this.filterValue.set(value);
  }

  public get sortTypeValue() {
    return this.sortType();
  }

  public get sortOrderValue() {
    return this.sortOrder();
  }

  public toggleSortOrder() {
    this.sortOrder.update((currentValue) =>
      currentValue === SortOrders.DESC ? SortOrders.ASC : SortOrders.DESC,
    );
  }

  private setSortOrderValue(value: SortOrders) {
    this.sortOrder.set(value);
  }

  public setSortType(value: SortTypes) {
    if (value !== this.sortType()) {
      this.sortType.set(value);
      this.setSortOrderValue(SortOrders.UNSET);
    }
  }

  private searchResults$(
    searchValue: string,
    pageToken?: string | null,
  ): Observable<SearchListResponse> {
    const API_URL_FOR_VIDEOS: string = `${YOUTUBE_API.SEARCH}${searchValue}${pageToken ? `&pageToken=${pageToken}` : ''}`;
    return this.http.get<SearchListResponse>(API_URL_FOR_VIDEOS);
  }

  public searchResultsIds$(
    searchResultsIds: string,
  ): Observable<VideoListResponse> {
    const API_URL_FOR_STATS: string = `${YOUTUBE_API.VIDEOS}${searchResultsIds}`;
    return this.http.get<VideoListResponse>(API_URL_FOR_STATS);
  }

  public search$(
    query: string,
    pageToken?: string | null,
  ): Observable<{
    items: VideoItemResponse[];
    nextPageToken: string | null;
    prevPageToken: string | null;
  }> {
    return this.searchResults$(query, pageToken).pipe(
      switchMap((searchResponse) => {
        const videoIds = searchResponse.items
          .map((item) => item.id.videoId)
          .join(',');

        return this.searchResultsIds$(videoIds).pipe(
          map((statsResponse) => ({
            items: statsResponse.items,
            nextPageToken: searchResponse.nextPageToken || null,
            prevPageToken: searchResponse.prevPageToken || null,
          })),
        );
      }),
    );
  }
}
