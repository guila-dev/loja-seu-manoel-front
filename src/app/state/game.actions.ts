import { createAction, props } from '@ngrx/store';
import { Game } from '../core/entities/game.entity';

export const addGame = createAction(
  '[Games] Add Game',
  props<{ game: Game }>()
);


export const loadGames = createAction('loadGames');