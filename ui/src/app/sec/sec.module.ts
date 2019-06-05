import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SecRoutingModule } from './sec-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SecRoutingModule
  ]
})
export class SecModule { }
