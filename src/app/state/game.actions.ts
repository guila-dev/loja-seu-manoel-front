import { createAction, props } from '@ngrx/store';
import { Game } from '../core/entities/game.interface';

export const addGame = createAction(
  '[Games] Add Game',
  props<{ game: Game }>()
);

export const loadGames = createAction('[Games] Load Games');