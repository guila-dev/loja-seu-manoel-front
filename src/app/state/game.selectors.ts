import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameState } from './game.state';
import { Game } from '../core/entities/game.entity';

export const selectItemsState = createFeatureSelector<Game[]>('games');

export const selectAllItems = createSelector(
  selectItemsState,
  (state: Game[]) => state
);