import {Component, ChangeDetectorRef, ElementRef, ViewChild } from "@angular/core";
@Component({
    selector: "sidedrawermenu",
    template: `
    <StackLayout class="sideTitleStackLayout">
    <Label text="Navigation Menu"></Label>
</StackLayout>
<StackLayout class="sideStackLayout" backgroundColor="red">
    <Label text="FirstPage" class="sideLabel sideLightGrayLabel" [nsRouterLink]="['/first']"></Label>
    <Label text="SecondPage" class="sideLabel" [nsRouterLink]="['/second']"></Label>
</StackLayout>
    `,
})
export class SideDrawerComponent {
    constructor() {
    }

    
}