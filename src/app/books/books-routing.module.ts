import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {BooksComponent} from "./books/books.component";
import {BooksSaveComponent} from "./books-save/books-save.component";
import {BooksViewComponent} from "./books-view/books-view.component";

const routes: Routes = [
    {path: 'book', component: BooksComponent},
    {path: 'book/save', component: BooksSaveComponent},
    {path: 'book/:id/edit', component: BooksSaveComponent},
    {path: 'book/:id/view', component: BooksViewComponent},
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BooksRoutingModule {
}
