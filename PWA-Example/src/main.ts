// src/main.ts
import { platformBrowser } from '@angular/platform-browser'; // Mudado de platformBrowserDynamic
import { AppModule } from './app/app-module';

platformBrowser().bootstrapModule(AppModule)
  .catch(err => console.error(err));