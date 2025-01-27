import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {differentialScriptLoader, stylesheetLoader} from './scriptLoader';
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

//Add Fluid script
const fluidScript = document.createElement('script');
differentialScriptLoader(environment.fluidScriptESM,environment.fluidScriptLegacy,fluidScript);
stylesheetLoader(environment.fluidStyleSheet);


