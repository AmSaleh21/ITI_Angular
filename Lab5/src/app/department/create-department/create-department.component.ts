import { Component, OnInit } from '@angular/core';
import {DepartmentService} from "../../services/department.service";

@Component({
  selector: 'lab5-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {

  displayCreateModel: boolean = false;

  constructor(public departmentService: DepartmentService) { }

  ngOnInit(): void {
  }

  showCreateDialog(){
    this.displayCreateModel = true;
  }

  add(name: string, location:string){
    this.displayCreateModel = false;
    this.departmentService.addNew(name, location);
  }

}
