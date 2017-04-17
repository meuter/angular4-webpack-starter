import { Component } from '@angular/core';

@Component({
    selector: "app",
    template: "<h1>{{greetings}}</h1>"
})
export class RootComponent {
    readonly greetings : string = "Hello World";
}