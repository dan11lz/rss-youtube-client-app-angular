import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { searchValue } from '../../../redux/actions/youtube-cards.actions';
import { selectHasResults } from '../../../redux/selectors/video-cards.selectors';
import { LoginService } from '../../../auth/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(
    private loginService: LoginService,
    private store: Store,
  ) {}

  public setSearchValue(value: string): void {
    this.store.dispatch(searchValue({ query: value }));
    this.loginService.goToMain();
  }

  public hasResults$ = this.store.select(selectHasResults);

  public get isUserLoggedIn$(): Observable<boolean> {
    return this.loginService.isUserLoggedIn$();
  }
}
