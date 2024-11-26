import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './core/pages/not-found/not-found.component';

import {
  canActivateGuard,
  canMatchGuard,
  authRedirectMatchGuard,
} from './auth/guards/auth/auth.guard';

const routes: Routes = [
  { path: 'login', redirectTo: '' },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canMatch: [authRedirectMatchGuard],
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    canMatch: [canMatchGuard],
    canActivate: [canActivateGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canMatch: [canMatchGuard],
    canActivate: [canActivateGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
    canMatch: [canMatchGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
