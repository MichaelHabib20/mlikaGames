import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GamesService } from '../../services/games.service';
import { Game } from '../../models/game.interface';
import { switchMap, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  game$!: Observable<Game>;
  currentRouteType: 'games' | 'church-games' = 'games';
  selectedImage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService
  ) {
    this.game$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        this.currentRouteType = this.route.snapshot.url[0].path as 'games' | 'church-games';
        return this.gamesService.getGameById(id).pipe(
          filter((game): game is Game => game !== undefined)
        );
      })
    );
  }

  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      if (segments.length > 0) {
        const path = segments[0].path;
        this.currentRouteType = path === 'church-games' ? 'church-games' : 'games';
      }
    });
  }
} 