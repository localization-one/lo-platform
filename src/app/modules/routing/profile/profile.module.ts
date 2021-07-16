import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePage } from './pages';
import {NzTabsModule} from "ng-zorro-antd/tabs";

@NgModule({
  declarations: [ProfilePage],
  imports: [CommonModule, ProfileRoutingModule, NzTabsModule],
})
export class ProfileModule {}
