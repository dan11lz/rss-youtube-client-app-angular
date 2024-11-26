import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { FilteringDashboardComponent } from './components/filtering-dashboard/filtering-dashboard.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CustomCardComponent } from './components/custom-card/custom-card.component';

import { PublicationDateStatusColorDirective } from './directives/publication-date-status-color.directive';

import { FilterPipe } from './pipes/filter/filter.pipe';
import { SortPipe } from './pipes/sort/sort.pipe';

import { MainComponent } from './pages/main/main.component';
import { DetailedInformationPageComponent } from './pages/detailed-information-page/detailed-information-page.component';

import { CustomButtonComponent } from '../shared/components/custom-button/custom-button.component';

import { YoutubeRoutingModule } from './youtube-routing.module';

@NgModule({
  declarations: [
    FilteringDashboardComponent,
    SearchItemComponent,
    SearchResultsComponent,
    PublicationDateStatusColorDirective,
    FilterPipe,
    SortPipe,
    MainComponent,
    DetailedInformationPageComponent,
    CustomCardComponent,
  ],
  imports: [SharedModule, CustomButtonComponent, YoutubeRoutingModule],
})
export class YoutubeModule {}
