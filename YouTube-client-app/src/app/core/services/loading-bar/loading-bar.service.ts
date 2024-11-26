import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingBarService {
  private loadingBar$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false,
  );

  showLoading(): void {
    this.loadingBar$.next(true);
  }

  hideLoading(): void {
    this.loadingBar$.next(false);
  }

  isLoadingBarShown$(): Observable<boolean> {
    return this.loadingBar$.asObservable();
  }
}
