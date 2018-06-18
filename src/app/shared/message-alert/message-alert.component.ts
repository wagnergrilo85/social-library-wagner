import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';

@Component({
    selector: 'app-message-alert',
    templateUrl: './message-alert.component.html',
    styleUrls: ['./message-alert.component.css']
})
export class MessageAlertComponent implements OnInit {

    @Input()
    color: string = 'info';

    @Input()
    closeAlert: boolean = false;

    @Input()
    timeout: null;

    @ViewChild('divAlert')
    divAlert: ElementRef;

    constructor() {
    }

    ngOnInit() {
        if(this.timeout){
            // setTimeout(() => {
            //     $(this.divAlert.nativeElement).modal('close');
            // }, this.timeout);
        }
    }


}
