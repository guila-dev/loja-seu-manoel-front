import { createReducer, on } from "@ngrx/store";
import { Game } from "../core/entities/game.interface";
import { addGame, loadGames } from "./game.actions";

export const initialState: Game[] = [];

export const gamesReducer = createReducer(
    initialState,
    on(addGame, (games, { game }) => ({
      ...games,
      game
    })),
    on(loadGames, (games) => games)  
  );