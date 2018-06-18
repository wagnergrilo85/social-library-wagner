import {Injectable} from '@angular/core';
import {API_BACK} from "../api/app.api";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../models/category.model";

@Injectable()
export class CategoryService {

    private url_api = API_BACK;
    private resource = "category";

    constructor(private http: HttpClient) {
    }

    listAll(): Observable<any> {
        return this.http.get(`${this.url_api}/${this.resource}`);
    }

    saveOrEdit(category: Category): Observable<any> {
        return !category.id ? this.http.post(`${this.url_api}/${this.resource}`, category) : this.http.put(`${this.url_api}/${this.resource}/${category.id}`, category);
    }

    find(id: number): Observable<any> {
        return this.http.get(`${API_BACK}/${this.resource}/${id}`);
    }

    destroy(id: number): Observable<any> {
        return this.http.delete(`${API_BACK}/${this.resource}/${id}`);
    }


}
