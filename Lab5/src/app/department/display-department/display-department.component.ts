import { Component, OnInit } from '@angular/core';
import {DepartmentService} from "../../services/department.service";

@Component({
  selector: 'lab5-display-department',
  templateUrl: './display-department.component.html',
  styleUrls: ['./display-department.component.css']
})
export class DisplayDepartmentComponent implements OnInit {

  constructor(public departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.departmentService.getLocalStorage();
  }

}
