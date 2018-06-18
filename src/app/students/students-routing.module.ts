import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {StudentsComponent} from "./students/students.component";
import {StudentsSaveComponent} from "./students-save/students-save.component";
import {StudentsViewComponent} from "./students-view/students-view.component";

const routes: Routes = [
    {path: 'student', component: StudentsComponent},
    {path: 'student/save', component: StudentsSaveComponent},
    {path: 'student/:id/edit', component: StudentsSaveComponent},
    {path: 'student/:id/view', component: StudentsViewComponent},
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})

export class StudentsRoutingModule {
}
