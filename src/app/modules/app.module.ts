// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from '../components/app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule, FormsModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
