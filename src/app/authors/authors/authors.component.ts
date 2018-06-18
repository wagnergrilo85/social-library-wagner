import {Component, OnInit, ViewChild} from '@angular/core';
import {API_BACK} from "../../api/app.api";
import {DataTablesResponse} from "../../utils/datatables-response";
import {Author} from "../../models/author.model";
import {HttpClient} from "@angular/common/http";
import {AuthorService} from "../../services/author.service";
import {ModalComponent} from "../../shared/modal/modal.component";
import {MessageService} from "../../services/message.service";

// declare jquery
declare var $;

@Component({
    selector: 'app-authors',
    templateUrl: './authors.component.html',
    styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

    //------------------------------------------------------------------------------------------------------------------
    //*** Variables declarations
    private url_api: string = API_BACK;
    dtOptions: DataTables.Settings = {};
    messageAlert: string = '';
    colorAlert: string = "danger";
    
    authors: Author[];
    currentModelToDelete = null;

    @ViewChild(ModalComponent)
    modal: ModalComponent;
    //------------------------------------------------------------------------------------------------------------------

    constructor(private http: HttpClient,
                private authorService: AuthorService,
                private messageService: MessageService) {
    }

    ngOnInit() {
        this.list_data_dt();
        this.messageAlert = this.messageService.message;
        this.colorAlert = this.messageService.color;
        this.messageService.message = "";
    }

    openModal(author: Author) {
        this.currentModelToDelete = author;
        this.modal.open();
    }

    destroy() {

        this.authorService
            .destroy(+this.currentModelToDelete.id)
            .subscribe(() => {
                const indexTable = this.authors.indexOf(this.currentModelToDelete);
                this.authors.splice(indexTable, 1);
                this.messageAlert = `Autor ${this.currentModelToDelete.name} apagado com sucesso!`;
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
                        `${this.url_api}/author-datatables`,
                        dataTablesParameters, {}
                    ).subscribe(resp =>
                    {
                        that.authors = resp.data;

                        console.log(resp.data);

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
                {data: 'nationality'},
                {data: 'created_at'},
                {data: 'status'},
            ]
        };
    }

}
