import { Component } from "@angular/core";

@Component({
    selector: 'heading',
    styleUrl: './heading.component.css',
    templateUrl: './heading.component.html',
    standalone: true,
})

export default class Heading {
    title = "Testing Angular";
}