import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutWrapperComponent } from './components';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { PageHeaderModule } from '@widgets/page-header';

@NgModule({
  declarations: [LayoutWrapperComponent],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    PageHeaderModule,
  ],
  exports: [LayoutWrapperComponent],
})
export class LayoutModule {}
