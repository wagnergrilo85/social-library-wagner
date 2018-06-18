import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedRoutingModule} from "./shared-routing.module";

import {InputComponent} from "./input/input.component";
import {ModalComponent} from "./modal/modal.component";
import {SelectComponent} from "./select/select.component";
import {FormsModule} from "@angular/forms";
import {Select2Component} from "./select2/select2.component";
import { BtnActionTableComponent } from './btn-action-table/btn-action-table.component';
import { BoxHeaderPageComponent } from './box-header-page/box-header-page.component';
import { MessageAlertComponent } from './message-alert/message-alert.component';
import { BtnSubmitCrudComponent } from './btn-submit-crud/btn-submit-crud.component';
import { FieldControlErrorComponent } from './field-control-error/field-control-error.component';

@NgModule({
    declarations: [
        InputComponent,
        SelectComponent,
        ModalComponent,
        Select2Component,
        BtnActionTableComponent,
        BoxHeaderPageComponent,
        MessageAlertComponent,
        BtnSubmitCrudComponent,
        FieldControlErrorComponent,
    ],
    imports: [
        CommonModule,
        SharedRoutingModule,
        FormsModule
    ],
    exports: [
        InputComponent,
        SelectComponent,
        ModalComponent,
        Select2Component,
        BtnActionTableComponent,
        BoxHeaderPageComponent,
        MessageAlertComponent,
        BtnSubmitCrudComponent,
        FieldControlErrorComponent
    ]
})

export class SharedModule {
}
