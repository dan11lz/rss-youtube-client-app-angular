import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { YOUTUBE_API, YOUTUBE_API_TOKEN } from '../../constants/constants';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {
  /* eslint-disable class-methods-use-this */
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const fullRequest = request.clone({
      url: `${YOUTUBE_API.BASE}${request.url}&key=${YOUTUBE_API_TOKEN}`,
    });

    return next.handle(fullRequest);
  }
}
