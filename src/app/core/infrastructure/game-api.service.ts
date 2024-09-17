// infrastructure/services/game-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../entities/game.entity';
import { catchError, map, Observable, of } from 'rxjs';
import { GameRepository } from '../gateway/game.repository';
import { error } from 'console';
import { gameListMock } from '../../../mock-data/game.mock';
import { Store } from '@ngrx/store';
import { addGame } from '../../state/game.actions';
import { GameMapper } from '../mappers/game.mapper';
import { selectAllItems, selectItemsState } from '../../state/game.selectors';

@Injectable({
  providedIn: 'root',
})
export class GameApiService implements GameRepository {
  constructor( private store: Store) {}
    findById(id: number | { error: string; }): Observable<Game> {
        const findedGame = gameListMock.find(game => game.id == id);
        if(!findedGame) return of()
        return of(findedGame);
    }
  save(game: Game): Observable<any> {
    //save Game
    const gameToSave = GameMapper.toDTO(game)
    this.store.dispatch(addGame({game: gameToSave}))

    return of({status: 'Ok'});
  }


  findAll(): Observable<Game[]> {
    return this.store.select(selectAllItems).pipe(
        map(gameState =>{
          return gameState.map(game => GameMapper.toDomain(game))
        }))
    }

}
