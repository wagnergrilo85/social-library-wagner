import {Component, OnInit} from '@angular/core';
import {Publishing} from "../../models/publishing.model";
import {PublishingService} from "../../services/publishing.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-publishing-view',
    templateUrl: './publishing-view.component.html',
    styleUrls: ['./publishing-view.component.css']
})
export class PublishingViewComponent implements OnInit {

    publishing: Publishing = new Publishing();

    constructor(private publishingService: PublishingService,
                private activeRoute: ActivatedRoute,
                private route: Router) {
    }

    ngOnInit() {

        this.activeRoute.params.subscribe(params => {
           if(params.hasOwnProperty('id')){
                this.publishingService.find(+params['id']).subscribe(data => {
                    this.publishing = data;
                },
                error => console.log(`Opss deu erro!! ${error}`)
                )
           }
        });
    }

}
