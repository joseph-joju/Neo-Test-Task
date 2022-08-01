import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatedComponent } from './authenticated.component';


const routes=[
  {
    path: '',
    component: AuthenticatedComponent,
  }
]
@NgModule({
  declarations: [
    AuthenticatedComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthenticatedModule { }
