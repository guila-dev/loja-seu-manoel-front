import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameState } from './game.state';

export const selectItemsState = createFeatureSelector<GameState>('games');

export const selectAllItems = createSelector(
  selectItemsState,
  (state: GameState) => state.games
);