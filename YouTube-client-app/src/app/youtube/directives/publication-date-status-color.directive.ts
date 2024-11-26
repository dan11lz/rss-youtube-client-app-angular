import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';
import { Colors, Period } from '../../shared/constants/constants';

@Directive({
  selector: '[appPublicationDateStatusColor]',
})
export class PublicationDateStatusColorDirective implements OnInit {
  @Input() appPublicationDateStatusColor!: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    if (this.el) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'background-color',
        this.setStatusColor(),
      );
    }
  }

  private setStatusColor(): string {
    const timeDifference =
      Date.now() - Date.parse(this.appPublicationDateStatusColor);

    if (timeDifference < Period.week) return Colors.blue;
    if (timeDifference < Period.month) return Colors.green;
    if (timeDifference < Period.halfYear) return Colors.yellow;
    return Colors.red;
  }
}
