import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '@const';
import { loadProfile, loadProjects } from '@loader';

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
  {
    path: ROUTES.profile,
    loadChildren: loadProfile,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatformRoutingModule {}
