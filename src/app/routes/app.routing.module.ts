import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {DashboardComponent} from "../dashboard/dashboard/dashboard.component";
import {AuthorsModule} from "../authors/authors.module";
import {DashboardModule} from "../dashboard/dashboard.module";
import {BooksModule} from "../books/books.module";
import {CategoriesModule} from "../categories/categories.module";
import {PublishingModule} from "../publishing/publishing.module";
import {StudentsModule} from "../students/students.module";

const appRoutes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
    declarations: [
        DashboardComponent,
    ],
    imports: [
        DashboardModule,
        AuthorsModule,
        BooksModule,
        CategoriesModule,
        PublishingModule,
        StudentsModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})

export class AppRoutingModule {
}