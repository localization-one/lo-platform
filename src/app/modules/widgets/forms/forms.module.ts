import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModernInputComponent } from './components';
import {ReactiveFormsModule} from "@angular/forms";
import {NzToolTipModule} from "ng-zorro-antd/tooltip";

@NgModule({
  declarations: [ModernInputComponent],
  imports: [CommonModule, ReactiveFormsModule, NzToolTipModule],
  exports: [ModernInputComponent],
})
export class FormsModule {}
