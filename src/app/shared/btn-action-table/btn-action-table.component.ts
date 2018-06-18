import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-btn-action-table',
    templateUrl: './btn-action-table.component.html',
    styleUrls: ['./btn-action-table.component.css']
})
export class BtnActionTableComponent implements OnInit {

    @Input() id: number = null;
    @Input() routeLinkPar: string = '';

    constructor() {
    }

    ngOnInit() {
    }

}
