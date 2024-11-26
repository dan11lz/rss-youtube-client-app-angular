import { NgModule, isDevMode } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { videoCardsReducer } from './redux/reducers/video-cards.reducer';
import { YoutubeCardsEffects } from './redux/effects/youtube-cards.effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UrlInterceptor } from './youtube/interceptors/url-interceptor/url.interceptor';
import { LoadingBarInterceptor } from './core/interceptors/loading-interceptor/loading.interceptor';
import { ErrorInterceptor } from './core/interceptors/error-interceptor/error.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    StoreModule.forRoot({ videoCards: videoCardsReducer }),
    EffectsModule.forRoot([YoutubeCardsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingBarInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
