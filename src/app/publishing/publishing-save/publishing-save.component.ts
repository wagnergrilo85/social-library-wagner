import {Component, OnInit} from '@angular/core';
import {Publishing} from "../../models/publishing.model";
import {PublishingService} from "../../services/publishing.service";
import {MessageService} from "../../services/message.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-publishing-save',
    templateUrl: './publishing-save.component.html',
    styleUrls: ['./publishing-save.component.css']
})
export class PublishingSaveComponent implements OnInit {

    publishing: Publishing = new Publishing();

    arrayDataStatus = [
        { value: 1, label: 'Habilitado'},
        { value: 0, label: 'Desabilitado'}
    ];


    constructor(private publishingService: PublishingService,
                private route: Router,
                private routerActive: ActivatedRoute,
                private messageService: MessageService) {
    }

    ngOnInit() {
        this.routerActive.params.subscribe(params => {
            if(params.hasOwnProperty('id')){
                this.publishingService.find(+params['id']).subscribe(data => {
                    this.publishing = data;
                });
            }
        });
    }

    saveOrEdit(form){

        // console.log(this.publishing);
        // console.log(form);

        this.publishingService
            .saveOrEdit(this.publishing)
            .subscribe(resp => {

                    if(this.publishing.id)
                        this.messageService.message = `Editora ${this.publishing.name} atualizada com sucesso!`;
                    else
                        this.messageService.message = `Editora ${this.publishing.name} cadastrada com sucesso`;

                    this.messageService.color = "success";
                    this.route.navigate(['/publishing']);
                },
                error => console.log('Opss deu erro!' + error)
            );
    }

}
