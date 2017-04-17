import { Component } from '@angular/core';

@Component({
    selector: "app",
    template: `
    <div class="container">
    <h1>{{greetings}}<i class="fa fa-check" aria-hidden="true"></i></h1>
    </div>
    `
})
export class RootComponent {
    readonly greetings : string = "Hello World";
}