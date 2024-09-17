import { Observable } from "rxjs";
import { Game } from "../entities/game.entity";

export abstract class GameRepository {
  abstract save(game: Game): Observable<Game>;
  abstract findById(id: number | {error: string}): Observable<Game>;
  abstract findAll(): Observable<Game[]>;
  }