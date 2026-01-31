import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoggerService } from './core/logging/application';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-training');
  private readonly logger  = inject(LoggerService);
  constructor() {
    this.logger.debug('App Component initialized');
  }
}
