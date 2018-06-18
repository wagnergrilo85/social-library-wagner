import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';

declare let $;

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

    @ViewChild('divModal')
    divModal: ElementRef;

    constructor() {
    }

    ngOnInit() {
    }

    open(){
        $(this.divModal.nativeElement).modal('show');
    }

    close(){
        $(this.divModal.nativeElement).modal('hide');
    }

}
