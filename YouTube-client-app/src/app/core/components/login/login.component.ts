import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { LoginService } from '../../../auth/services/login/login.service';

import { clearState } from '../../../redux/actions/youtube-cards.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private store: Store,
  ) {}

  public logout(): void {
    this.loginService.logout();
    this.store.dispatch(clearState());
  }

  public get isUserLoggedIn$(): Observable<boolean> {
    return this.loginService.isUserLoggedIn$();
  }

  public get userEmail() {
    return this.loginService.getUserEmail;
  }

  public goToAdmin(): void {
    this.router.navigate(['/admin']);
  }
}
