import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AuthtestComponent } from './authtest/authtest.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo:'/dashboard', pathMatch:'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: UserDetailComponent },
  { path: 'create', component: CreateUserComponent },
  // { path: 'authtest', component: AuthtestComponent, canActivate: [AuthGuard]},
  {path: 'authtest',
  loadChildren: () => import('./modules/authenticated/authenticated.module').then(m => m.AuthenticatedModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
