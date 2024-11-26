import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';

import { canDeactivateGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    canDeactivate: [canDeactivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
