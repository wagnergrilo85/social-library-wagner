import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {BooksRoutingModule} from "./books-routing.module";
import {BooksComponent} from "./books/books.component";
import {BooksSaveComponent} from "./books-save/books-save.component";
import {BooksViewComponent} from "./books-view/books-view.component";

@NgModule({
    declarations: [
        BooksComponent,
        BooksSaveComponent,
        BooksViewComponent,
    ],
    imports: [
        CommonModule,
        BooksRoutingModule
    ],
})

export class BooksModule {
}
