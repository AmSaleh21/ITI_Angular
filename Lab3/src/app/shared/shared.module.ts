import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerToXPipe } from './power-to-x.pipe';
import { PipeTestsComponent } from './pipe-tests/pipe-tests.component';
import {FormsModule} from "@angular/forms";
import { ReplaceDashWithSpacePipe } from './replace-dash-with-space.pipe';
import { ArrayFilterPipe } from './array-filter.pipe';
import {ChipsModule} from "primeng/chips";



@NgModule({
  declarations: [
    PowerToXPipe,
    PipeTestsComponent,
    ReplaceDashWithSpacePipe,
    ArrayFilterPipe
  ],
  exports: [
    PowerToXPipe,
    PipeTestsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChipsModule
  ]
})
export class SharedModule { }
