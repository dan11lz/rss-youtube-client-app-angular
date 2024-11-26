import { Pipe, PipeTransform } from '@angular/core';

import { VideoItemResponse } from '../../interfaces/video-list-response.interface';

import { SortTypes, SortOrders } from '../../../shared/constants/constants';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  /* eslint-disable class-methods-use-this */
  transform(
    searchResults: VideoItemResponse[],
    sortType: SortTypes,
    sortOrder: SortOrders,
  ): VideoItemResponse[] {
    if (
      !searchResults ||
      (sortOrder !== SortOrders.ASC && sortOrder !== SortOrders.DESC)
    )
      return searchResults;

    const results = [...searchResults];

    function sortByDate(items: VideoItemResponse[]): VideoItemResponse[] {
      return items.sort((a, b) => {
        if (sortOrder === SortOrders.ASC) {
          return (
            new Date(a.snippet.publishedAt).getTime() -
            new Date(b.snippet.publishedAt).getTime()
          );
        }
        return (
          new Date(b.snippet.publishedAt).getTime() -
          new Date(a.snippet.publishedAt).getTime()
        );
      });
    }

    function sortByViews(items: VideoItemResponse[]): VideoItemResponse[] {
      return items.sort((a, b) => {
        if (sortOrder === SortOrders.ASC) {
          return (
            Number(a.statistics.viewCount) - Number(b.statistics.viewCount)
          );
        }
        return Number(b.statistics.viewCount) - Number(a.statistics.viewCount);
      });
    }

    switch (sortType) {
      case SortTypes.DATE:
        return sortByDate(results);
      case SortTypes.VIEWS:
        return sortByViews(results);
      default:
        return results;
    }
  }
}
