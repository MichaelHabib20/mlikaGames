import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  template: `
    <mat-toolbar color="primary" class="toolbar">
      <span class="logo" routerLink="/games">
        <mat-icon>sports_esports</mat-icon>
        متجر الألعاب
      </span>
      <span class="spacer"></span>
      <button mat-button routerLink="/games">
        <mat-icon>home</mat-icon>
        الألعاب
      </button>
    </mat-toolbar>

    <main class="main-content">
      <router-outlet></router-outlet>
    </main>

    <footer class="footer">
      <p>© 2025 متجر الألعاب. جميع الحقوق محفوظة.</p>
    </footer>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    .toolbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.5rem;
      cursor: pointer;

      mat-icon {
        font-size: 2rem;
        height: 2rem;
        width: 2rem;
      }
    }

    .spacer {
      flex: 1 1 auto;
    }

    .main-content {
      margin-top: 64px;
      flex: 1;
      background-color: #f5f5f5;
    }

    .footer {
      background: #333;
      color: white;
      text-align: center;
      padding: 1rem;
      margin-top: auto;
    }

    button {
      mat-icon {
        margin-left: 0.5rem;
        margin-right: 0;
      }
    }

    /* RTL specific adjustments */
    :host-context([dir="rtl"]) {
      .logo {
        flex-direction: row-reverse;
      }
    }
  `]
})
export class AppComponent {
  title = 'متجر الألعاب';
}
