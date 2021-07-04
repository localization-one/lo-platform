import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '@const';
import { loadProjects } from '@loader';

const routes: Routes = [
  {
    path: ROUTES.default,
    redirectTo: ROUTES.projects,
    pathMatch: 'full',
  },
  {
    path: ROUTES.projects,
    loadChildren: loadProjects,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatformRoutingModule {}
