import { Component } from '@angular/core';

@Component({
    selector: "app",
    templateUrl: "./app.component.html",
    styleUrls: [ "./app.component.css" ]
})
export class AppComponent {
    readonly greetings : string = "Hello World";
}