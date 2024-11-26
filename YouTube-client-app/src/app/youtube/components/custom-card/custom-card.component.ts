import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CustomCard } from '../../interfaces/custom-card.interface';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrl: './custom-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCardComponent {
  @Input() customCard!: CustomCard;

  @Input() index!: number;

  @Output() deleteCard = new EventEmitter<number>();

  onDelete(): void {
    this.deleteCard.emit(this.index);
  }
}
