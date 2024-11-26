import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { SearchFormComponent } from './components/search-form/search-form.component';
import { SettingsButtonComponent } from './components/settings-button/settings-button.component';
import { LoginComponent } from './components/login/login.component';

import { CustomButtonComponent } from '../shared/components/custom-button/custom-button.component';

import { HeaderComponent } from './pages/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';

@NgModule({
  declarations: [
    SearchFormComponent,
    SettingsButtonComponent,
    LoginComponent,
    HeaderComponent,
    NotFoundComponent,
    LoadingBarComponent,
  ],
  imports: [RouterModule, SharedModule, CustomButtonComponent],
  exports: [HeaderComponent, LoadingBarComponent],
})
export class CoreModule {}
