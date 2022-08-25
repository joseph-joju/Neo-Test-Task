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
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { UserListEffect } from "src/app/store/user-list effects";
import { reducer } from "src/app/store/user-list.reducers";
import { AppNotDirective } from "src/app/shared/directives/app-not.directive"
import { HighlightDirective } from "src/app/shared/directives/button-borders";
import { AuthtestComponent } from './authtest/authtest.component';
import { AuthGuard } from "src/app/auth/auth.guard";
 

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
      component: UserDetailComponent,

      children:[
        {
          path:"authtest",
          component:AuthtestComponent,
          canActivate:[AuthGuard]
        },
      ]
    },
   
  ]
  },
  ];

@NgModule({
  declarations: [
    DashboardComponent,
    MouseHoverDirective,
    UserDetailComponent,
    CreateUserComponent,
    UsersListComponent,
    AppNotDirective,
    HighlightDirective,
    AuthtestComponent,

    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forRoot({"user": reducer}),
    EffectsModule.forRoot([UserListEffect]),
  ],
  exports: [],
})
export class DashboardModule {}
