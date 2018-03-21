import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderOpComponent } from './header-op/header-op.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContentsComponent } from './contents/contents.component';
import { Router } from '@angular/router/src/router';


const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'contents',
    component: ContentsComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderOpComponent,
    UsersComponent,
    CategoriesComponent,
    ContentsComponent
  ],
  exports: [RouterModule],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
