import { Component } from '@angular/core';

@Component({
    selector: "app",
    templateUrl: "./root.component.html",
})
export class RootComponent {
    readonly greetings : string = "Hello World";
}