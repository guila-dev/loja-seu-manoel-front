import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() classes = '';
  @Input() placeholder = '';
  @Input() type = 'text';

  @Input() onInput = (event: Event) => {};
}
