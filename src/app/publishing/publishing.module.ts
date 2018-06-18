import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {DataTablesModule} from "angular-datatables";
import {HttpClientModule} from "@angular/common/http";

import {PublishingRoutingModule} from "./publishing-routing.module";
import {PublishingComponent} from "./publishing/publishing.component";
import {PublishingSaveComponent} from "./publishing-save/publishing-save.component";
import {PublishingViewComponent} from "./publishing-view/publishing-view.component";
import {SharedModule} from "../shared/shared.module";
import {PublishingService} from "../services/publishing.service";

@NgModule({
    declarations: [
        PublishingComponent,
        PublishingSaveComponent,
        PublishingViewComponent
    ],
    imports: [
        CommonModule,
        PublishingRoutingModule,
        SharedModule,
        FormsModule,
        DataTablesModule,
        HttpClientModule
    ],
    exports: [],
    providers: [PublishingService]
})

export class PublishingModule {
}
