import { ApplicationConfig, provideZoneChangeDetection, isDevMode, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { gamesReducer } from './state/game.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { GameApiService } from './core/infrastructure/game-api.service';
import { GameRepository } from './core/gateway/game.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    { provide: GameRepository, useClass: GameApiService },    provideStore({ games: gamesReducer }),
    provideEffects(), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
