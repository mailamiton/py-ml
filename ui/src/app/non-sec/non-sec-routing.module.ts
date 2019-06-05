import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: '',
    redirectTo : 'auth',
    pathMatch : 'full'
  },
  {
    path:'register',
    component : RegisterComponent
  },
  {
    path:'auth',
    component : AuthComponent
  },
  {
    path: '**',
    redirectTo : 'auth',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
