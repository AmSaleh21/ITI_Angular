import { Injectable } from '@angular/core';
import {Student} from "../_models/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [
    new Student(1, 'Ali', 24, 2),
    new Student(2, 'Saleh', 26, 2)
  ];
  lastId = 2;
  constructor() { }
  public addNew(name: string, age:number, department_number:number): void {
    this.students.push(new Student(++this.lastId, name, age, department_number));
  }

  public save(student: Student): void {
    student.isEditing = false;
  }

  public update(editStudent: Student): void {
    this.students.splice(this.getStudentIndexByType(editStudent), 1,editStudent);
  }

  public remove(id: number): void {
    this.students.splice(this.getStudentIndexByID(id), 1);
  }

  getStudentIndexByType(studentToFind: Student): number{
    return this.students.findIndex(student=>student.id===studentToFind.id);
  }

  getStudentIndexByID(id:number): number{
    return this.students.findIndex(student=>student.id===id);
  }

  getStudentByID(id:number):Student | undefined {
    return this.students.find(student=>student.id===id)
  }

  public getAllStudents(): Student[] {
    return this.students;
  }
}
