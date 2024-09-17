import { Observable } from "rxjs";
import { Game } from "../entities/game.entity";
import { GameRepository } from "../gateway/game.repository";
import {Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class NewGameUseCase {
  constructor(private repository: GameRepository) {}

  execute(game: Game): Observable<Game> {
    return this.repository.save(game);
  }
}