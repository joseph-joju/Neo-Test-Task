import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatedComponent } from './authenticated.component';
import {  RouterModule, Routes } from '@angular/router';


const route: Routes=[
  {
    path: '',
    component: AuthenticatedComponent
  }
];

@NgModule({
  declarations: [
    AuthenticatedComponent
  ],
  imports: [
    RouterModule.forChild(route),
    CommonModule
  ]
})
export class AuthenticatedModule { }
