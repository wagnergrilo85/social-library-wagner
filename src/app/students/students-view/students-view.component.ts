import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../services/student.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Student} from "../../models/student.model";

@Component({
    selector: 'app-students-view',
    templateUrl: './students-view.component.html',
    styleUrls: ['./students-view.component.css']
})
export class StudentsViewComponent implements OnInit {

    student: Student = new Student();

    constructor(private studentService: StudentService,
                private route: Router,
                private activeRoute: ActivatedRoute) {
    }

    ngOnInit() {

        this.activeRoute.params.subscribe(params => {
            if (params.hasOwnProperty('id')) {
                this.studentService.find(+params['id']).subscribe(data => {
                        this.student = data;
                    },
                    error => console.log('Opss deu erro ' + error)
                )
            }
        });
    }

}
