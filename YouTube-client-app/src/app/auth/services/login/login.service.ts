import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

import { User } from '../../interfaces/user.interface';

import { DEFAULT_USER } from '../../common/constants';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private user!: User;

  private isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false,
  );

  constructor(private router: Router) {
    this.initUser();
  }

  private fakeToken(): void {
    this.user.token = `${this.user.email}.${Math.random().toString(16).slice(2)}`;
  }

  private saveUser(): void {
    localStorage.setItem(
      'client',
      JSON.stringify({
        email: this.user.email,
        token: this.user.token,
      }),
    );
  }

  private setLoginStatus(): void {
    this.isLoggedIn$.next(true);
  }

  private setLogoutStatus(): void {
    this.isLoggedIn$.next(false);
  }

  public login(user: User): void {
    this.user = { ...user };
    this.setLoginStatus();
    this.fakeToken();
    this.saveUser();
    this.goToMain();
  }

  public logout(): void {
    localStorage.removeItem('client');
    this.user = DEFAULT_USER;
    this.setLogoutStatus();
    this.goToLogin();
  }

  public get getUserEmail(): User['email'] {
    return this.user.email;
  }

  public isUserLoggedIn$(): Observable<boolean> {
    return this.isLoggedIn$.asObservable();
  }

  private initUser(): void {
    this.user = JSON.parse(
      localStorage.getItem('client') || JSON.stringify(DEFAULT_USER),
    );

    if (this.user.token) this.setLoginStatus();
  }

  public goToLogin(): void {
    this.router.navigate(['/login']);
  }

  public goToMain(): void {
    this.router.navigate(['/main']);
  }
}
