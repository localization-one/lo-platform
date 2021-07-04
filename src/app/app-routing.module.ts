import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadAuth, loadPlatform } from '@loader';
import { ROUTES } from '@const';

const routes: Routes = [
  {
    path: ROUTES.default,
    redirectTo: ROUTES.auth,
    pathMatch: 'full',
  },
  {
    path: ROUTES.auth,
    loadChildren: loadAuth,
  },
  {
    path: ROUTES.platform,
    loadChildren: loadPlatform,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
