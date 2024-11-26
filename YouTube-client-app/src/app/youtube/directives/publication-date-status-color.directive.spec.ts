import { ElementRef, Renderer2 } from '@angular/core';

import { PublicationDateStatusColorDirective } from './publication-date-status-color.directive';

xdescribe('PublicationDateStatusColorDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = {
      nativeElement: document.createElement('div'),
    } as ElementRef;
    const mockRenderer = {} as Renderer2;

    const directive = new PublicationDateStatusColorDirective(
      mockElementRef,
      mockRenderer,
    );
    expect(directive).toBeTruthy();
  });
});
