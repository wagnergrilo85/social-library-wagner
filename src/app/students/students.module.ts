import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {StudentsRoutingModule} from "./students-routing.module";
import {StudentsComponent} from "./students/students.component";
import {StudentsSaveComponent} from "./students-save/students-save.component";
import {StudentsViewComponent} from "./students-view/students-view.component";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {DataTablesModule} from "angular-datatables";
import {StudentService} from "../services/student.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        StudentsComponent,
        StudentsSaveComponent,
        StudentsViewComponent,
    ],
    imports: [
        CommonModule,
        StudentsRoutingModule,
        SharedModule,
        HttpClientModule,
        FormsModule,
        DataTablesModule
    ],
    exports: [],
    providers: [StudentService]
})
export class StudentsModule {
}
