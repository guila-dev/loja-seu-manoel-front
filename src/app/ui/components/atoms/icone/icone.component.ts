import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icone',
  standalone: true,
  imports: [],
  templateUrl: './icone.component.html',
})
export class IconeComponent {
  @Input() iconSrc: string = '';
  @Input() altText: string = '';
}
