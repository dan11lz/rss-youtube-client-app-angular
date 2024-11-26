import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';

import { LoginService } from '../../../auth/services/login/login.service';
import { YoutubeService } from '../../services/youtube/youtube.service';

import { VideoItemResponse } from '../../interfaces/video-list-response.interface';

import { EMPTY_VIDEO_ITEM_RESPONSE } from '../../constants/constants';
import { CustomCard } from '../../interfaces/custom-card.interface';
import { selectCustomCardByIndex } from '../../../redux/selectors/video-cards.selectors';

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrl: './detailed-information-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedInformationPageComponent implements OnInit {
  public cardInfo$?: Observable<VideoItemResponse>;

  public customCardInfo$?: Observable<CustomCard>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private youtubeService: YoutubeService,
    private store: Store,
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      if (id.length === 11) {
        this.cardInfo$ = this.youtubeService.searchResultsIds$(id).pipe(
          map((response) => response.items[0]),
          catchError(() => {
            this.loginService.goToMain();
            return of(EMPTY_VIDEO_ITEM_RESPONSE);
          }),
        );
      } else {
        this.customCardInfo$ = this.store.select(
          selectCustomCardByIndex(Number(id)),
        );
      }
    }
  }
}
