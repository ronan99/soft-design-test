import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { PublicComponent } from 'src/app/public/public.component';

const routes: Routes = [
  {
    path: "", component: PublicComponent,
    children: [{
      path: "", component: LoginComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
