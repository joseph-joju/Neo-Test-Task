import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {  HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { RouterTestingModule } from '@angular/router/testing';

import { httpInterceptorProviders } from './interceptor_index';
import { AuthtestComponent } from './authtest/authtest.component';
import { HighlightDirective } from './shared/directives/button-borders'
import { AppNotDirective } from './shared/directives/app-not.directive';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserListEffect } from './store/user-list effects';
import { reducer } from './store/user-list.reducers';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserDetailComponent,
    CreateUserComponent,
    AuthtestComponent,
    HighlightDirective,
    AppNotDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    StoreModule.forRoot({"user": reducer}),
    EffectsModule.forRoot([UserListEffect]),
  ],
  providers: [HttpClientModule, RouterTestingModule,httpInterceptorProviders
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
