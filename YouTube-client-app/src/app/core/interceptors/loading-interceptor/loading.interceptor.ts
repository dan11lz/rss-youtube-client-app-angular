import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';

import { LoadingBarService } from '../../services/loading-bar/loading-bar.service';

@Injectable()
export class LoadingBarInterceptor implements HttpInterceptor {
  constructor(private loadingBarService: LoadingBarService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    this.loadingBarService.showLoading();

    return next.handle(request).pipe(
      finalize(() => {
        this.loadingBarService.hideLoading();
      }),
    );
  }
}
