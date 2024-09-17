import { Component } from '@angular/core';
import { GameFormComponent } from './components/organisms/game-form/game-form.component';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-new-game',
  standalone: true,
  imports: [GameFormComponent, FormsModule],
  templateUrl: './new-game.component.html',
  styleUrl: './new-game.component.css'
})
export class NewGameComponent {

}
