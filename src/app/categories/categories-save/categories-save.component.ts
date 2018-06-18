import {Component, OnInit} from '@angular/core';
import {Category} from "../../models/category.model";
import {CategoryService} from "../../services/category.service";
import {MessageService} from "../../services/message.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-categories-save',
    templateUrl: './categories-save.component.html',
    styleUrls: ['./categories-save.component.css']
})
export class CategoriesSaveComponent implements OnInit {

    category: Category = new Category();

    arrayDataStatus = [
        { value: 1, label: 'Habilitado'},
        { value: 0, label: 'Desabilitado'}
    ];

    constructor(private categoryService: CategoryService,
                private routerActive: ActivatedRoute,
                private route: Router,
                private messageService: MessageService) {
    }

    ngOnInit() {

        this.routerActive.params.subscribe(params => {
            if(params.hasOwnProperty('id')){
                this.categoryService.find(+params['id']).subscribe(data => {
                    this.category = data;
                });
            }
        });
    }

    saveOrEdit(form){

        console.log(form);

        this.categoryService
            .saveOrEdit(this.category)
            .subscribe(resp => {

                    if(this.category.id)
                        this.messageService.message = `Categoria ${this.category.name} atualizada com sucesso!`;
                    else
                        this.messageService.message = `Categoria ${this.category.name} cadastrada com sucesso`;

                    this.messageService.color = "success";
                    this.route.navigate(['/category']);
                },
                error => console.log('Opss deu erro!' + error)
            );
    }

}
