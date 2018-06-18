import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthorsComponent} from "./authors/authors.component";
import {AuthorsSaveComponent} from "./authors-save/authors-save.component";
import {AuthorsViewComponent} from "./authors-view/authors-view.component";

const routes: Routes = [
    {path: 'author', component: AuthorsComponent},
    {path: 'author/save', component: AuthorsSaveComponent},
    {path: 'author/:id/edit', component: AuthorsSaveComponent},
    {path: 'author/:id/view', component: AuthorsViewComponent},
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthorsRoutingModule {
}
