import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LayoutModule} from "./layout/layout.module";
import {AppRoutingModule} from "./routes/app.routing.module";
import {SharedModule} from "./shared/shared.module";
import {DataTablesModule} from "angular-datatables";
import {HttpClientModule} from "@angular/common/http";
import {MessageService} from "./services/message.service";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        LayoutModule,
        HttpClientModule,
        SharedModule,
        DataTablesModule,
        AppRoutingModule
    ],
    providers: [MessageService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
