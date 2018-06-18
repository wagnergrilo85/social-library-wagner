import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {

    public message: string = null;
    public color: string = 'primary';

    constructor() {
    }

}
