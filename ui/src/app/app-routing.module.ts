import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './sec/dashboard/dashboard.component';
import {urlConstant} from './app.enum';

const routes: Routes = [
  {
    path:'',
    redirectTo : urlConstant.NON_SEC,
    pathMatch : 'full'
  },
  {
    path: urlConstant.NON_SEC,
    loadChildren: './non-sec/non-sec.module#NonSecModule',
  },
  {
    path:'**',
    redirectTo : urlConstant.NON_SEC,
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
