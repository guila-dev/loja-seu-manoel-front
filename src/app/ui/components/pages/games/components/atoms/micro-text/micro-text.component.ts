import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-micro-text',
  standalone: true,
  imports: [],
  templateUrl: './micro-text.component.html',
})
export class MicroTextComponent {
  @Input() text = '';

}
