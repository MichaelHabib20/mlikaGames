import { Routes } from '@angular/router';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'games', component: GameListComponent },
  { path: 'games/:id', component: GameDetailsComponent },
  { path: 'church-games', component: GameListComponent },
  { path: 'church-games/:id', component: GameDetailsComponent },
  { path: '**', redirectTo: '/games' }
];
