import {Component, OnInit} from '@angular/core';
import {Student} from 'src/app/_models/student';

@Component({
  selector: 'lab2-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[] = [
    new Student(1, "Ahmed", 19, 1),
    new Student(2, "Abdo", 12, 2)
  ]
  id:number;
  editing: boolean = false

  constructor() {
    this.id = this.students.length
  }

  ngOnInit(): void {
  }

  add(id:any, name:any, age:any, depNumber:any) {
    if((name == "") || (id == "") || (age == "") || (depNumber == "")){

      if(!isNaN(Number(age)) || !isNaN(Number(depNumber)) || !(Number(age) <= 0) || !(Number(depNumber) <= 0) || !(name.length <= 2)){
        let newStudent = new Student(Number(id), name, Number(age), Number(depNumber))
        this.students.push(newStudent);
      }else{
        alert('invalid values, please make sure age and department number is positive numbers && name is longer than 2');
      }
    }else {
      alert('fields empty')
    }
  }

  save(id:any, name: any, age: any, depNumber: any) {
    let indexToUpdate = this.students.findIndex((student) => {
      return student.id === (this.id);
    })
    this.students[indexToUpdate].id = id;
    this.students[indexToUpdate].name = name.value;
    this.students[indexToUpdate].age = age.value;
    this.students[indexToUpdate].depNumber = depNumber.value;
    this.editing = false;
  }

  delete(id: number) {
    let indexToDelete = this.students.findIndex((student) => {
      return student.id === Number(id);
    })
    this.students.splice(indexToDelete, 1);
  }

  edit(selectedID:number, id:any, name:any, age:any, depNumber:any) {
    this.editing = true;
    let indexToUpdate = this.students.findIndex((student) => {
      return student.id === Number(selectedID)
    })
    id.value = this.students[indexToUpdate].id;
    if(!isNaN(age.value) || !isNaN(depNumber.value) || !(age.value <= 0) || !(depNumber.value <= 0)){
      age.value = this.students[indexToUpdate].age;
      depNumber.value = this.students[indexToUpdate].depNumber;
      this.id = selectedID;
    }else{
      alert('please make sure age and department number is positive numbers')
    }
    if (!(name.value.length <= 2)) {
      name.value = this.students[indexToUpdate].name;
    } else {
      alert('name is too short')
    }
  }
}
