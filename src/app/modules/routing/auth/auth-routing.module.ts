import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ROUTES} from "@const";
import {AuthPage, LoginPage, RegisterPage} from "./pages";

const routes: Routes = [
  {
    path: ROUTES.default,
    component: AuthPage,
    children: [
      {
        path: ROUTES.default,
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginPage
      },
      {
        path: 'register',
        component: RegisterPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
