import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PackagesComponent} from './packages/packages.component';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {CalendarModule} from "primeng/calendar";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import { ShowImageDialogComponent } from './show-image-dialog/show-image-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    PackagesComponent,
    ShowImageDialogComponent,
  ],
  exports: [
    PackagesComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        CalendarModule,
        InputTextModule,
        RippleModule,
        MatDialogModule
    ]
})
export class PackagesModule {
}
