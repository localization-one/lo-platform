import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutWrapperComponent } from './components';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { PageHeaderModule } from '@widgets/page-header';
import { LayoutHeaderComponent } from './components/layout-header/layout-header.component';
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [LayoutWrapperComponent, LayoutHeaderComponent],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    PageHeaderModule,
    NzDropDownModule,
    RouterModule,
  ],
  exports: [LayoutWrapperComponent],
})
export class LayoutModule {}
