import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
})
export class ImageComponent {

  @Input() src = '';
  @Input() alt = '';
}
