import {Component, OnInit} from '@angular/core';
import {AuthorService} from "../../services/author.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Author} from "../../models/author.model";

@Component({
    selector: 'app-authors-view',
    templateUrl: './authors-view.component.html',
    styleUrls: ['./authors-view.component.css']
})
export class AuthorsViewComponent implements OnInit {

    author: Author = new Author();

    constructor(private authorService: AuthorService,
                private route: Router, private activeRoute: ActivatedRoute) {
    }

    ngOnInit() {

        this.activeRoute.params.subscribe(params => {
           if(params.hasOwnProperty('id')){
               this.authorService.find(+params['id']).subscribe(data => {
                   this.author = data;
               },
               error => console.log('Opss deu erro ' + error)
           )}
        });
    }

}
