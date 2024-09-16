import { Component } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';
import { Game } from '../../../../core/entities/game.entity';
import { GameListComponent } from '../../organisms/game-list/game-list.component';
import { Store } from '@ngrx/store';
import { gamesReducer } from '../../../../state/game.reducer';
import { selectItemsState } from '../../../../state/game.selectors';
import { addGame } from '../../../../state/game.actions';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [GameListComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  game: Game =   {
    name: 'Game 55555',
    price: 8.6,
    dimensions: '40 x 20 x 20',
    description: 'string',
    coverImage: 'https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=314,height=314,fit=cover,f=auto/df93c433d1889f08a8446509d32a4253.png'
  }
constructor( private store: Store) {
  this.store.select(selectItemsState).subscribe(
    item =>{
      console.log('lista', item)
    }
    
  )

  this.store.dispatch(addGame({game: this.game}))
}

  gameList: Game[] =[{
    name: 'Game',
    price: 4.6,
    dimensions: '40 x 20 x 20',
    description: 'string',
    coverImage: 'https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=314,height=314,fit=cover,f=auto/df93c433d1889f08a8446509d32a4253.png'
  },
  {
    name: 'Game 2',
    price: 8.6,
    dimensions: '40 x 20 x 20',
    description: 'string',
    coverImage: 'https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=314,height=314,fit=cover,f=auto/df93c433d1889f08a8446509d32a4253.png'
  }]
teste(){
  alert('teste')
}


}
