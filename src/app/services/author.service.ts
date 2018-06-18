import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Author} from "../models/author.model";
import {Observable} from "rxjs";
import {API_BACK} from "../api/app.api";

@Injectable()
export class AuthorService {

    private url_api = API_BACK;
    private resource = "author";

    constructor(private http: HttpClient) {
    }

    listAll(): Observable<any> {
        return this.http.get(`${this.url_api}/${this.resource}`);
    }

    saveOrEdit(author: Author): Observable<any> {
        return !author.id ? this.http.post(`${this.url_api}/${this.resource}`, author) : this.http.put(`${this.url_api}/${this.resource}/${author.id}`, author);
    }

    find(id: number): Observable<any> {
        return this.http.get(`${API_BACK}/${this.resource}/${id}`);
    }

    destroy(id: number): Observable<any> {
        return this.http.delete(`${API_BACK}/${this.resource}/${id}`);
    }


}
