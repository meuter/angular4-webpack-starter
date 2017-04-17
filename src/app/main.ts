import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './modules/app.module';

// TODO(cme): enableProdMode is env is set

platformBrowserDynamic().bootstrapModule(AppModule);
