import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'src/app/login/auth.guard';

const routes: Routes = [
  {
    path: "", loadChildren: () => import('./public/public.module').then((m) => m.PublicModule)
  },
  {
    path: "app", loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
