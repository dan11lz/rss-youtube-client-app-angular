import { Pipe, PipeTransform } from '@angular/core';

import { VideoItemResponse } from '../../interfaces/video-list-response.interface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  /* eslint-disable class-methods-use-this */
  transform(
    searchResults: VideoItemResponse[],
    filterValue?: string,
  ): VideoItemResponse[] {
    if (filterValue) {
      const trimmedFilterValueInLowerCase = filterValue.trim().toLowerCase();
      return searchResults.filter((videoItemResponse: VideoItemResponse) => {
        const trimmedTitleInLowerCase = videoItemResponse.snippet.title
          .trim()
          .toLowerCase();
        return trimmedTitleInLowerCase.includes(trimmedFilterValueInLowerCase);
      });
    }
    return searchResults;
  }
}
