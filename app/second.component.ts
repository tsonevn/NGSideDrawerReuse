
    // template: `
    //     <GridLayout>
    //         <RadSideDrawer exampleTitle toggleNavButton>
    //                 <StackLayout tkDrawerContent class="sideStackLayout">
    //                     <StackLayout>
    //                         <sidedrawermenu></sidedrawermenu>
    //                     </StackLayout>
                        
    //                 </StackLayout>
    //                 <StackLayout tkMainContent>
    //                     <Label text="Second page" textWrap="true" class="drawerContentText"></Label>
    //                     <Button text="OPEN DRAWER" (tap)=openDrawer()></Button>
    //                 </StackLayout>
    //             </RadSideDrawer>
    //         </GridLayout>
    // `


import {Component, ChangeDetectorRef, ElementRef, ViewChild } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";

class Country {
    constructor(public name: string) { }
}

var europianCountries = ["Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
"Denmark", "Estonia", "Finland", "France","Germany", "Greece", "Hungary", "Ireland", "Italy", 
"Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands","Poland", "Portugal", "Romania", "Slovakia", 
"Slovenia","Spain", "Sweden", "United Kingdom"];

@Component({
    selector: "second",
    templateUrl:"second.component.html"
})
export class SecondComponent { 


    public countries: Array<Country>;
    constructor(private _changeDetectionRef: ChangeDetectorRef) {
         this.countries = [];

        for (var i = 0; i < europianCountries.length; i++) {
            this.countries.push(new Country(europianCountries[i]));
        }
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


     public onItemTap(args) {
        console.log("Item Tapped at cell index: " + args.index);
    }
}