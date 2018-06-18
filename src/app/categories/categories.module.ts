import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {CategoriesRoutingModule} from "./categories-routing.module";
import {CategoriesComponent} from "./categories/categories.component";
import {CategoriesSaveComponent} from "./categories-save/categories-save.component";
import {CategoriesViewComponent} from "./categories-view/categories-view.component";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CategoryService} from "../services/category.service";
import {DataTablesModule} from "angular-datatables";

@NgModule({
    declarations: [
        CategoriesComponent,
        CategoriesSaveComponent,
        CategoriesViewComponent,
    ],
    imports: [
        CommonModule,
        CategoriesRoutingModule,
        SharedModule,
        FormsModule,
        DataTablesModule,
        HttpClientModule
    ],
    exports: [],
    providers: [CategoryService]
})

export class CategoriesModule {
}
