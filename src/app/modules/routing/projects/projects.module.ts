import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsPage, ProjectDetailedComponent } from './pages';
import { FormsModule } from '@widgets/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ReactiveFormsModule } from '@angular/forms';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { DrawerTeamCreationComponent } from './components';

@NgModule({
  declarations: [
    ProjectsPage,
    ProjectDetailedComponent,
    DrawerTeamCreationComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzCardModule,
    NzAvatarModule,
    NzIconModule,
    NzTypographyModule,
    NzBadgeModule,
    NzButtonModule,
    NzToolTipModule,
    NzListModule,
    NzGridModule,
    NzDrawerModule,
  ],
})
export class ProjectsModule {}
