import {Injectable} from '@angular/core';
import {API_BACK} from "../api/app.api";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Publishing} from "../models/publishing.model";

@Injectable()
export class PublishingService {

    private url_api = API_BACK;
    private resource = "publishing-company";

    constructor(private http: HttpClient) {
    }

    listAll(): Observable<any> {
        return this.http.get(`${this.url_api}/${this.resource}`);
    }

    saveOrEdit(publishing: Publishing): Observable<any> {
        return !publishing.id ? this.http.post(`${this.url_api}/${this.resource}`, publishing) : this.http.put(`${this.url_api}/${this.resource}/${publishing.id}`, publishing);
    }

    find(id: number): Observable<any> {
        return this.http.get(`${API_BACK}/${this.resource}/${id}`);
    }

    destroy(id: number): Observable<any> {
        return this.http.delete(`${API_BACK}/${this.resource}/${id}`);
    }

}
