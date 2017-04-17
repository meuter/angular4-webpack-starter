import 'core-js';
import 'rxjs';
import 'zone.js/dist/zone.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './modules/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
