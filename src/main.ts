import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';



// Inicia la aplicación con AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
