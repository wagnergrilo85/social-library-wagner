import {Component, OnInit} from '@angular/core';
import {Category} from "../../models/category.model";
import {CategoryService} from "../../services/category.service";
import {MessageService} from "../../services/message.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-categories-view',
    templateUrl: './categories-view.component.html',
    styleUrls: ['./categories-view.component.css']
})
export class CategoriesViewComponent implements OnInit {

    category: Category = new Category();

    constructor(private categoryService: CategoryService,
                private route: Router,
                private activeRoute: ActivatedRoute,
                private messageService: MessageService) {
    }

    ngOnInit() {

        this.activeRoute.params.subscribe(params => {
            if(params.hasOwnProperty('id')){
                this.categoryService.find(+params['id']).subscribe(data => {
                        this.category = data;
                    },
                    error => console.log('Opss deu erro ' + error)
                )}
        });
    }
}
