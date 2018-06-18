import {Component, OnInit} from '@angular/core';
import {Student} from "../../models/student.model";
import {StudentService} from "../../services/student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "../../services/message.service";

@Component({
    selector: 'app-students-save',
    templateUrl: './students-save.component.html',
    styleUrls: ['./students-save.component.css']
})
export class StudentsSaveComponent implements OnInit {

    student: Student = new Student();

    arrayDataStatus = [
        { value: 1, label: 'Habilitado'},
        { value: 0, label: 'Desabilitado'}
    ];

    constructor(private studentService: StudentService,
                private routerActive: ActivatedRoute,
                private route: Router,
                private messageService: MessageService) {
    }

    ngOnInit() {

        this.routerActive.params.subscribe(params => {
            if(params.hasOwnProperty('id')){
                this.studentService.find(+params['id']).subscribe(data => {
                    this.student = data;
                });
            }
        });
    }

    saveOrEdit(form){

        console.log(this.student);
        // console.log(form);

        this.studentService
            .saveOrEdit(this.student)
            .subscribe(resp => {

                    if(this.student.id)
                        this.messageService.message = `Estudante ${this.student.name} atualizado com sucesso!`;
                    else
                        this.messageService.message = `Estudante ${this.student.name} cadastrado com sucesso`;

                    this.messageService.color = "success";
                    this.route.navigate(['/student']);
                },
                error => console.log('Opss deu erro!' + error)
            );
    }


}
