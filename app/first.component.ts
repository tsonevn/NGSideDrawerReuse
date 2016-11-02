import {Component, ChangeDetectorRef, ElementRef, ViewChild } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";

@Component({
    selector: "first",
    template: `
        <GridLayout>
            <RadSideDrawer exampleTitle toggleNavButton>
                    <StackLayout tkDrawerContent class="sideStackLayout">
                        <StackLayout>
                            <sidedrawermenu></sidedrawermenu>
                        </StackLayout>
                        
                    </StackLayout>
                    <StackLayout tkMainContent>
                        <Label text="First page" textWrap="true" class="drawerContentText"></Label>
                        <Button text="OPEN DRAWER" (tap)=openDrawer()></Button>
                    </StackLayout>
                </RadSideDrawer>
        </GridLayout>
    `
})
export class FirstComponent {
    constructor(private _changeDetectionRef: ChangeDetectorRef) {
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    public openDrawer() {
        this.drawer.showDrawer();
    }
 }