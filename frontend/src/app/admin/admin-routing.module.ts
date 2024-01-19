import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/app/admin/admin.component';
import { MainPageComponent } from 'src/app/admin/main-page/main-page.component';

const routes: Routes = [
  {
    path: "", component: AdminComponent,
    children: [{
      path: "", component: MainPageComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
