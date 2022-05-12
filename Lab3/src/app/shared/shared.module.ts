import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { PowerToXPipe } from './pipes/power-to-x.pipe';
import { PipeTestsComponent } from './pipe-tests/pipe-tests.component';
import { ReplaceDashWithSpacePipe } from './pipes/replace-dash-with-space.pipe';
import { ArrayFilterPipe } from './pipes/array-filter.pipe';
import {ChipsModule} from "primeng/chips";
import {RateComponent} from "./rate/rate.component";
import { ProductFilterPipe } from './pipes/product-filter.pipe';


@NgModule({
  declarations: [
    PowerToXPipe,
    PipeTestsComponent,
    ReplaceDashWithSpacePipe,
    ArrayFilterPipe,
    RateComponent,
    ProductFilterPipe
  ],
  exports: [
    PowerToXPipe,
    PipeTestsComponent,
    RateComponent,
    ProductFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChipsModule
  ]
})
export class SharedModule { }
