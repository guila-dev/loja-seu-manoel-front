import { Component, Input } from '@angular/core';
import { Game } from '../../../../../../../core/entities/game.entity';
import { ButtonComponent } from '../../../../../atoms/button/button.component';
import { ImageComponent } from '../../atoms/image/image.component';
import { TextComponent } from '../../atoms/text/text.component';
import { DescriptionComponent } from "../../atoms/description/description.component";
import { MicroTextComponent } from '../../atoms/micro-text/micro-text.component';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [ButtonComponent,ImageComponent,
    TextComponent, MicroTextComponent,
    DescriptionComponent],
  templateUrl: './game-card.component.html',
})
export class GameCardComponent {
  @Input()
  game!: Game;
  
} 
