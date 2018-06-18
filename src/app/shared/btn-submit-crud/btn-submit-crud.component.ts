import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-btn-submit-crud',
    templateUrl: './btn-submit-crud.component.html',
    styleUrls: ['./btn-submit-crud.component.css']
})
export class BtnSubmitCrudComponent implements OnInit {

    @Input() validateForm: any;

    constructor() {
    }

    ngOnInit() {
    }

}
