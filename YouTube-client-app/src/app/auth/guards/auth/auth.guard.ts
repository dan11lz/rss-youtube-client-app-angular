import { inject } from '@angular/core';
import {
  CanActivateFn,
  CanMatchFn,
  CanDeactivateFn,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LoginService } from '../../services/login/login.service';

export const canActivateGuard: CanActivateFn = (): Observable<boolean> => {
  const loginService = inject(LoginService);
  return loginService.isUserLoggedIn$();
};

export const canMatchGuard: CanMatchFn = (): Observable<boolean | UrlTree> => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  return loginService
    .isUserLoggedIn$()
    .pipe(
      map((isLoggedIn: boolean) =>
        isLoggedIn ? true : router.parseUrl('/login'),
      ),
    );
};

export const canDeactivateGuard: CanDeactivateFn<
  unknown
> = (): Observable<boolean> => {
  const loginService = inject(LoginService);
  return loginService.isUserLoggedIn$();
};

export const authRedirectMatchGuard: CanMatchFn = (): Observable<
  boolean | UrlTree
> => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  return loginService
    .isUserLoggedIn$()
    .pipe(
      map((isLoggedIn: boolean) =>
        isLoggedIn ? router.parseUrl('/main') : true,
      ),
    );
};
