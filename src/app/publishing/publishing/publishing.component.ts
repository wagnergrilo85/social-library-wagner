import {Component, OnInit, ViewChild} from '@angular/core';
import {API_BACK} from "../../api/app.api";
import {Publishing} from "../../models/publishing.model";
import {ModalComponent} from "../../shared/modal/modal.component";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "../../services/message.service";
import {PublishingService} from "../../services/publishing.service";
import {DataTablesResponse} from "../../utils/datatables-response";

@Component({
    selector: 'app-publishing',
    templateUrl: './publishing.component.html',
    styleUrls: ['./publishing.component.css']
})
export class PublishingComponent implements OnInit {

    //------------------------------------------------------------------------------------------------------------------
    //*** Variables declarations
    private url_api: string = API_BACK;
    dtOptions: DataTables.Settings = {};
    messageAlert: string = '';
    colorAlert: string = "danger";

    publishings: Publishing[];
    currentModelToDelete = null;

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    //------------------------------------------------------------------------------------------------------------------
    constructor(private http: HttpClient,
                private publishingService: PublishingService,
                private messageService: MessageService) {
    }

    ngOnInit() {
        this.list_data_dt();
        this.messageAlert = this.messageService.message;
        this.colorAlert = this.messageService.color;
        this.messageService.message = "";
    }

    openModal(publishing: Publishing) {
        this.currentModelToDelete = publishing;
        this.modal.open();
    }

    destroy() {

        this.publishingService
            .destroy(+this.currentModelToDelete.id)
            .subscribe(() => {
                const indexTable = this.publishings.indexOf(this.currentModelToDelete);
                this.publishings.splice(indexTable, 1);
                this.messageAlert = `Editora ${this.currentModelToDelete.name} apagada com sucesso!`;
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
                        `${this.url_api}/publishing-company-datatables`,
                        dataTablesParameters, {}
                    ).subscribe(resp =>
                    {
                        that.publishings = resp.data;

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
                {data: 'website'},
                {data: 'email'},
                {data: 'address'},
                {data: 'created_at'},
                {data: 'status'},
            ]
        };
    }

}
