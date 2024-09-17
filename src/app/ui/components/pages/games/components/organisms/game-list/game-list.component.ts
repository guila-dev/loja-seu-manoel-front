import { Component, Input } from '@angular/core';
import { GameCardComponent } from '../../molecules/game-card/game-card.component';
import { Game } from '../../../../../../../core/entities/game.entity';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [GameCardComponent],
  templateUrl: './game-list.component.html',
})
export class GameListComponent {

  @Input() games!: Game[];
}
