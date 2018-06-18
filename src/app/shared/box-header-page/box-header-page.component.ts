import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-box-header-page',
    templateUrl: './box-header-page.component.html',
    styleUrls: ['./box-header-page.component.css']
})
export class BoxHeaderPageComponent implements OnInit {

    @Input() title: string = "";

    constructor() {
    }

    ngOnInit() {
    }

}
