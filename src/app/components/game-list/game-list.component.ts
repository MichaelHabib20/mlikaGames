import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { GamesService } from '../../services/games.service';
import { Game } from '../../models/game.interface';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  games$;
  currentRouteType: 'games' | 'church-games' | null = null;

  constructor(
    private gamesService: GamesService,
    private route: ActivatedRoute
  ) {
    this.games$ = this.gamesService.games$;
  }

  ngOnInit(): void {
    // Check the current route
    this.route.url.subscribe(segments => {
      if (segments.length > 0) {
        const path = segments[0].path;
        this.currentRouteType = path === 'church-games' ? 'church-games' : 'games';
      }
    });
  }
} 