import {Component, OnInit, ViewChild} from '@angular/core';
import {API_BACK} from "../../api/app.api";
import {Student} from "../../models/student.model";
import {ModalComponent} from "../../shared/modal/modal.component";
import {StudentService} from "../../services/student.service";
import {MessageService} from "../../services/message.service";
import {HttpClient} from "@angular/common/http";
import {DataTablesResponse} from "../../utils/datatables-response";

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

    //------------------------------------------------------------------------------------------------------------------
    //*** Variables declarations
    private url_api: string = API_BACK;
    dtOptions: DataTables.Settings = {};
    messageAlert: string = '';
    colorAlert: string = "danger";

    students: Student[];
    currentModelToDelete = null;

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    //------------------------------------------------------------------------------------------------------------------
    constructor(private http: HttpClient,
                private messageService: MessageService,
                private studentService: StudentService) {
    }

    ngOnInit() {
        this.list_data_dt();
        this.messageAlert = this.messageService.message;
        this.colorAlert = this.messageService.color;
        this.messageService.message = "";
    }

    openModal(student: Student) {
        this.currentModelToDelete = student;
        this.modal.open();
    }

    destroy() {

        this.studentService
            .destroy(+this.currentModelToDelete.id)
            .subscribe(() => {
                const indexTable = this.students.indexOf(this.currentModelToDelete);
                this.students.splice(indexTable, 1);
                this.messageAlert = `Estudante ${this.currentModelToDelete.name} apagado com sucesso!`;
                this.colorAlert = "danger";
                this.modal.close();
                this.list_data_dt();
            });
    }

    list_data_dt() {

        const that = this;

        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            language: {
                "url": "https://cdn.datatables.net/plug-ins/1.10.12/i18n/Portuguese-Brasil.json"
            },
            ajax: (dataTablesParameters: any, callback) => {
                that.http
                    .post<DataTablesResponse>(
                        `${this.url_api}/student-datatables`,
                        dataTablesParameters, {}
                    ).subscribe(resp =>
                    {
                        that.students = resp.data;

                        callback({
                            recordsTotal: resp.recordsTotal,
                            recordsFiltered: resp.recordsFiltered,
                            data: []
                        });
                    },
                    error => {
                        console.log('Opsss deu erro!');
                        console.log(error);
                    }
                );
            },
            columns: [
                {data: 'id'},
                {data: 'name'},
                {data: 'created_at'},
                {data: 'status'},
            ]
        };
    }


}
