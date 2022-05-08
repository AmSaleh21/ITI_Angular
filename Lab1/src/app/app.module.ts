import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DepartmentComponent } from './department/department.component';
import {StudentComponent} from "./student/student.component";
import { RedTieHeaderComponent } from './red-tie-header/red-tie-header.component';
import { RedTieFooterComponent } from './red-tie-footer/red-tie-footer.component';
import { RedTieSidebarComponent } from './red-tie-sidebar/red-tie-sidebar.component';
import { RedTieMenuComponent } from './red-tie-menu/red-tie-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    StudentComponent,
    RedTieHeaderComponent,
    RedTieFooterComponent,
    RedTieSidebarComponent,
    RedTieMenuComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
