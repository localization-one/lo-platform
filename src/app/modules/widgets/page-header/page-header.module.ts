import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './components';
import {NzDescriptionsModule} from "ng-zorro-antd/descriptions";
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {NzStatisticModule} from "ng-zorro-antd/statistic";
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {NzButtonModule} from "ng-zorro-antd/button";

@NgModule({
  declarations: [PageHeaderComponent],
  imports: [CommonModule, NzDescriptionsModule, NzPageHeaderModule, NzStatisticModule, NzTabsModule, NzButtonModule],
  exports: [PageHeaderComponent],
})
export class PageHeaderModule {}
