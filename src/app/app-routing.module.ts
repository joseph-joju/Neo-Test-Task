import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo:'/dashboard', pathMatch:'full' },
  { path: 'dashboard',
  loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
   },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
