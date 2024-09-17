import { Component, inject, signal } from '@angular/core';
import { HeaderTitleComponent } from '../../atoms/header-title/header-title.component';
import { IconeComponent } from '../../atoms/icone/icone.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-content',
  standalone: true,
  imports: [HeaderTitleComponent, IconeComponent, ButtonComponent],
  templateUrl: './header-content.component.html',
})
export class HeaderContentComponent {
  router = inject(Router);

  redirectToHome(){
    this.router.navigate(['home'])
  }
  redirectToNewGame(){
    this.router.navigate(['new-game'])
  }
}
