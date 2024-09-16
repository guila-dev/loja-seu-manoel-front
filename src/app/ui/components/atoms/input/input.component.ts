import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() classes = '';
  @Input() placeholder = '';
  @Input() type = 'text';

  @Input() label: string = '';
  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();

}
