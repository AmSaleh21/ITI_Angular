import {Injectable} from '@angular/core';
import {Department} from "../_models/department";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departments: Department[] = [];
  lastId = 0;
  constructor() { }

  public getLocalStorage(){
    this.departments = JSON.parse(localStorage.getItem('departments') || '[]');
  }

  private updateLocalStorage(){
    localStorage.setItem('departments', JSON.stringify(this.departments));
  }

  public addNew(name: string, location: string): void {
    this.departments.push(new Department(++this.lastId, name, location));
    this.updateLocalStorage();
  }

  public save(department: Department): void {
    department.isEditing = false;
  }

  public update(editDepartment: Department): void {
    this.departments.splice(this.getDepartmentIndexByType(editDepartment), 1,editDepartment);
    this.updateLocalStorage();
  }

  public remove(id: number): void {
    this.departments.splice(this.getDepartmentIndexByID(id), 1);
    this.lastId = (--this.lastId <= 0) ? 0 : --this.lastId;
    this.updateLocalStorage();
  }

  getDepartmentIndexByType(departmentToFind: Department): number{
    return this.departments.findIndex(Department=>Department.id===departmentToFind.id);
  }

  getDepartmentIndexByID(id:number): number{
    return this.departments.findIndex(department=>department.id===id);
  }

  getDepartmentByID(id:number):Department | undefined {
    return this.departments.find(department=>department.id===id)
  }

  public getAllDepartments(): Department[] {
    return this.departments;
  }
}
