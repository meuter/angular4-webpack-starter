// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgPipesModule } from 'ngx-pipes';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from '../components/app.component';
import { FooComponent } from '../components/foo.component';
import { BarComponent } from '../components/bar.component';

// Routes
const appRoutes : Routes = [
  { path: "foo", component: FooComponent },
  { path: "bar", component: BarComponent },
  { path: "**", redirectTo: "foo" }
];

@NgModule({
  declarations: [ AppComponent, FooComponent, BarComponent ],
  imports: [ BrowserModule, FormsModule, NgPipesModule, RouterModule.forRoot(appRoutes, {useHash: true}) ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
