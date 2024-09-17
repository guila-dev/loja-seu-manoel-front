import { Component } from '@angular/core';
import { Game } from '../../../../core/entities/game.entity';
import { GameListComponent } from './components/organisms/game-list/game-list.component';
import { ListGamesUseCase } from '../../../../core/usecases/list-game.usecase';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [GameListComponent],
  templateUrl: './games.component.html',
})
export class GamesComponent {
  game!: Game
constructor(private listGameService: ListGamesUseCase,) {
  this.listGameService.execute().subscribe(
    gameList =>{
      this.gameList = gameList;
    }
  )
    

}

  gameList: Game[] =[]
teste(){
  alert('teste')
}


}
