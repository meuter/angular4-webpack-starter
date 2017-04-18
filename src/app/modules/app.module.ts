// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgPipesModule } from 'ngx-pipes';

// Components
import { AppComponent } from '../components/app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule, FormsModule, NgPipesModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
