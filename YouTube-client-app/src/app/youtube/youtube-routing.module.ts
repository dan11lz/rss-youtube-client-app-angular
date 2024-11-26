import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { DetailedInformationPageComponent } from './pages/detailed-information-page/detailed-information-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'info/:id',
    component: DetailedInformationPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
