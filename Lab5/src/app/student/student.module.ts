import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateStudentComponent } from './create-student/create-student.component';
import { DisplayStudentComponent } from './display-student/display-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {ConfirmPopupModule} from "primeng/confirmpopup";



@NgModule({
  declarations: [
    CreateStudentComponent,
    DisplayStudentComponent,
    EditStudentComponent,
    DeleteStudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    RippleModule,
    ConfirmPopupModule,
  ],
  exports: [
    CreateStudentComponent,
    DisplayStudentComponent,
  ]
})
export class StudentModule { }
