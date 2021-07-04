import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailedComponent, ProjectsPage } from './pages';

const routes: Routes = [
  {
    path: '',
    component: ProjectsPage,
  },
  {
    path: ':projectID',
    component: ProjectDetailedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
