import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { RouterTestingModule } from '@angular/router/testing';

import { httpInterceptorProviders } from './interceptor_index';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserDetailComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [HttpClientModule, RouterTestingModule,httpInterceptorProviders
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
