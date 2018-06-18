import {Component, OnInit, ViewChild} from '@angular/core';
import {API_BACK} from "../../api/app.api";
import {Category} from "../../models/category.model";
import {ModalComponent} from "../../shared/modal/modal.component";
import {CategoryService} from "../../services/category.service";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "../../services/message.service";
import {DataTablesResponse} from "../../utils/datatables-response";

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

    //------------------------------------------------------------------------------------------------------------------
    //*** Variables declarations
    private url_api: string = API_BACK;
    dtOptions: DataTables.Settings = {};
    messageAlert: string = '';
    colorAlert: string = "danger";

    categories: Category[];
    currentModelToDelete = null;

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    //------------------------------------------------------------------------------------------------------------------
    constructor(private http: HttpClient,
                private messageService: MessageService,
                private categoryService: CategoryService) {
    }

    ngOnInit() {
        this.list_data_dt();
        this.messageAlert = this.messageService.message;
        this.colorAlert = this.messageService.color;
        this.messageService.message = "";
    }

    openModal(category: Category) {
        this.currentModelToDelete = category;
        this.modal.open();
    }

    destroy() {

        this.categoryService
            .destroy(+this.currentModelToDelete.id)
            .subscribe(() => {
                const indexTable = this.categories.indexOf(this.currentModelToDelete);
                this.categories.splice(indexTable, 1);
                this.messageAlert = `Categoria ${this.currentModelToDelete.name} apagada com sucesso!`;
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
                        `${this.url_api}/category-datatables`,
                        dataTablesParameters, {}
                    ).subscribe(resp =>
                    {
                        that.categories = resp.data;

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
