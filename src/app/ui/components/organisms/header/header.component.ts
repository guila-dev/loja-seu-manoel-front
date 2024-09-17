import { Component } from '@angular/core';
import { HeaderContentComponent } from '../../molecules/header-content/header-content.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderContentComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

}
