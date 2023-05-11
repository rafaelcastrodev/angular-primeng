import { Directive } from '@angular/core';

@Directive({
  selector: '[demo]',
  standalone: true,
})
export class DemoDirective {
  constructor() {}
}
