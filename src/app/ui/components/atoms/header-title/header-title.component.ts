import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-title',
  standalone: true,
  imports: [],
  templateUrl: './header-title.component.html',
})
export class HeaderTitleComponent {
  @Input() title: string = '';

}
