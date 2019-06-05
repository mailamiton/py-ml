import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { AuthRoutingModule } from './non-sec-routing.module';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [AuthComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule

  ]
})
export class NonSecModule { }
