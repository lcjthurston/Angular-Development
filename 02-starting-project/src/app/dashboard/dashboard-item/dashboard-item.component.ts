import { Component, Input, input } from "@angular/core";

@Component({
    selector: "app-dashboard-item",
    standalone: true,
    imports: [],
    templateUrl: "./dashboard-item.component.html",
    styleUrl: "./dashboard-item.component.css",
})
export class DashboardItemComponent {
    // Input Decorator is imported as Capital Input
    // @Input({required: true}) image!: { src: string; alt: string };
    // @Input({required: true}) title!: string;

    // Input Function is imported as Lowercase input
    // input() function is only available if you're using Angular 17.1 or later
    image = input.required<{ src: string; alt: string }>(); // notice generic type {} inside <>
    title = input.required<string>(); // notice specific type string inside <>
}
