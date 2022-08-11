import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { RouterModule, Routes } from "@angular/router";
import { NgxPaginationModule } from "ngx-pagination";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MouseHoverDirective } from "src/app/shared/directives/mouse-hover.directive";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { CreateUserComponent } from "./create-user/create-user.component";
import { HttpClientModule } from "@angular/common/http";
import { UsersListComponent } from './users-list/users-list.component';


const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    
    children:[
      {
        path:"",
        component:UsersListComponent
      },
      {
      path: "create",
      component: CreateUserComponent,
      
    },
    
    {
      path: "detail/:id",
      component: CreateUserComponent,
    },]
  },
  ];

@NgModule({
  declarations: [
    DashboardComponent,
    MouseHoverDirective,
    UserDetailComponent,
    CreateUserComponent,
    UsersListComponent,
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
})
export class DashboardModule {}
