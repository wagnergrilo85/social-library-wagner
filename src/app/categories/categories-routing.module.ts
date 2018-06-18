import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {CategoriesComponent} from "./categories/categories.component";
import {CategoriesSaveComponent} from "./categories-save/categories-save.component";
import {CategoriesViewComponent} from "./categories-view/categories-view.component";

const routes: Routes = [
    {path: 'category', component: CategoriesComponent},
    {path: 'category/save', component: CategoriesSaveComponent},
    {path: 'category/:id/edit', component: CategoriesSaveComponent},
    {path: 'category/:id/view', component: CategoriesViewComponent},
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})

export class CategoriesRoutingModule {
}
