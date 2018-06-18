import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {LayoutRoutingModule} from "./layout-routing.module";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import { NavLeftComponent } from './nav-left/nav-left.component';
import { NavRightComponent } from './nav-right/nav-right.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        NavLeftComponent,
        NavRightComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        NavLeftComponent,
        NavRightComponent
    ]
})
export class LayoutModule {
}
