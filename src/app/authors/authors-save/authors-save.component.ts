import {Component, OnInit} from '@angular/core';
import {Author} from "../../models/author.model";
import {AuthorService} from "../../services/author.service";
import {MessageService} from "../../services/message.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-authors-save',
    templateUrl: './authors-save.component.html',
    styleUrls: ['./authors-save.component.css']
})
export class AuthorsSaveComponent implements OnInit {

    author: Author = new Author();

    arrayDataStatus = [
        { value: 1, label: 'Habilitado'},
        { value: 0, label: 'Desabilitado'}
    ];
    statusSelecionado: number = 1;

    constructor(private authorService: AuthorService,
                private messageService: MessageService,
                private route: Router,
                private routerActive: ActivatedRoute) {
    }

    ngOnInit() {
        this.routerActive.params.subscribe(params => {
           if(params.hasOwnProperty('id')){
               this.authorService.find(+params['id']).subscribe(data => {
                    this.author = data;
               });
           }
        });
    }

    saveOrEdit(form){

        console.log(form);

        this.authorService
            .saveOrEdit(this.author)
            .subscribe(resp => {

                if(this.author.id)
                    this.messageService.message = `Autor ${this.author.name} atualizado com sucesso!`;
                else
                    this.messageService.message = `Autor ${this.author.name} cadastrado com sucesso`;

                this.messageService.color = "success";
                this.route.navigate(['/author']);
            },
            error => console.log('Opss deu erro!' + error)
        );
    }

}
