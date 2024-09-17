import { createReducer, on } from "@ngrx/store";
import { Game } from "../core/entities/game.entity";
import { addGame, loadGames } from "./game.actions";
import { gameListMock } from "../../mock-data/game.mock";

export const initialState: Game[] = gameListMock;

export const gamesReducer = createReducer(
    initialState,
    on(addGame, (state, { game }) => (
      [...state,
      game]
    )),
    on(loadGames, (state) => state)  
  );