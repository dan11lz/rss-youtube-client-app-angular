import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomButtonComponent {}
