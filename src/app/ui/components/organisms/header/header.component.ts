import { Component } from '@angular/core';
import { HeaderContentComponent } from '../../molecules/header-content/header-content.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderContentComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
