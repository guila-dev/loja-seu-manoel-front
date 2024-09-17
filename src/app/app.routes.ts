import { Routes } from '@angular/router';
import { GamesComponent } from './ui/components/pages/games/games.component';
import { NewGameComponent } from './ui/components/pages/new-game/new-game.component';

export const routes: Routes = [{
    path: 'home',
    component: GamesComponent
},
{
    path: 'new-game',
    component: NewGameComponent
},
{
    path: '**',
    redirectTo: 'home'
}
];
