// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { SIDEDRAWER_DIRECTIVES } from "nativescript-telerik-ui/sidedrawer/angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { routes } from "./app.routes";
import { SideDrawerComponent } from './components/sidedrawermenu.component'
import { FirstComponent } from "./first.component";
import { SecondComponent } from "./second.component";

@NgModule({
    declarations: [AppComponent, SIDEDRAWER_DIRECTIVES, SideDrawerComponent, FirstComponent, SecondComponent],
    entryComponents: [FirstComponent, SecondComponent],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)]
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);