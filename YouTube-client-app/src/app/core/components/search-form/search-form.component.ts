import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent {
  @Output() setSearchValueEvent = new EventEmitter<string>();

  public searchQuery: string = '';

  public onSetSearchValue(): void {
    this.setSearchValueEvent.emit(this.searchQuery);
  }
}
