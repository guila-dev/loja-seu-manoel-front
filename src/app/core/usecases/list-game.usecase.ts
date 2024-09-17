import { Observable } from "rxjs";
import { Game } from "../entities/game.entity";
import { GameRepository } from "../gateway/game.repository";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
  })
export class ListGamesUseCase {
  constructor(private repository: GameRepository) {}

  execute(): Observable<Game[]> {
    return this.repository.findAll();
  }
}