import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { PlatformPage } from './pages';

@NgModule({
  declarations: [PlatformPage],
  imports: [CommonModule, PlatformRoutingModule],
})
export class PlatformModule {}
