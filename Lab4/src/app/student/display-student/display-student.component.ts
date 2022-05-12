import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'Lab4-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit {

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
    console.log(this.studentService.getAllStudents())
  }

}
