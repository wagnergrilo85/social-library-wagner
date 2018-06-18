import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {AuthorsRoutingModule} from "./authors-routing.module";
import {AuthorsComponent} from "./authors/authors.component";
import {AuthorsSaveComponent} from "./authors-save/authors-save.component";
import {AuthorsViewComponent} from "./authors-view/authors-view.component";
import {AuthorService} from "../services/author.service";
import {SharedModule} from "../shared/shared.module";
import {DataTablesModule} from "angular-datatables";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AuthorsComponent,
        AuthorsSaveComponent,
        AuthorsViewComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        DataTablesModule,
        HttpClientModule,
        AuthorsRoutingModule
    ],
    providers: [
        AuthorService
    ],
    exports: [
    ]
})
export class AuthorsModule {
}
