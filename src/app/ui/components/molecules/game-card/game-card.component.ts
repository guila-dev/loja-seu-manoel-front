import { Component, Input } from '@angular/core';
import { Game } from '../../../../core/entities/game.interface';
import { ButtonComponent } from '../../atoms/button/button.component';
import { ImageComponent } from '../../atoms/image/image.component';
import { TextComponent } from '../../atoms/text/text.component';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [ButtonComponent, ImageComponent, TextComponent],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css'
})
export class GameCardComponent {
  @Input()
  game!: Game;
  

  onAddToCart(){
    console.log('clicado')
  }
} 
