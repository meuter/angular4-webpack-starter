import { Component, Input } from '@angular/core';

@Component({
    selector: "app",
    templateUrl: "./app.component.html",
    styleUrls: [ "./app.component.css" ]
})
export class AppComponent {
    readonly greetings = "Hello World";
    readonly persons = [
        { "name" : "john", "age" : 37 },
        { "name" : "joe", "age" : 25 },
        { "name" : "alan", "age": 52 }
    ];

    @Input() inputValue: string;
}