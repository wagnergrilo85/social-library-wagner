import {Injectable} from '@angular/core';
import {API_BACK} from "../api/app.api";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../models/student.model";

@Injectable()
export class StudentService {

    private url_api = API_BACK;
    private resource = "student";

    constructor(private http: HttpClient) {
    }

    listAll(): Observable<any> {
        return this.http.get(`${this.url_api}/${this.resource}`);
    }

    saveOrEdit(student: Student): Observable<any> {
        return !student.id ? this.http.post(`${this.url_api}/${this.resource}`, student) : this.http.put(`${this.url_api}/${this.resource}/${student.id}`, student);
    }

    find(id: number): Observable<any> {
        return this.http.get(`${API_BACK}/${this.resource}/${id}`);
    }

    destroy(id: number): Observable<any> {
        return this.http.delete(`${API_BACK}/${this.resource}/${id}`);
    }

}
