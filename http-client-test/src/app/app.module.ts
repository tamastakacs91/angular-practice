import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './page/index/index.component';
import { UsersComponent } from './page/users/users.component';
import { UserUpdateComponent } from './page/user-update/user-update.component';
import { UserNewComponent } from './page/user-new/user-new.component';


const appRoutes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "users/:id",
    component: UserUpdateComponent
  },
  {
    path: "new-user",
    component: UserNewComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IndexComponent,
    UsersComponent,
    UserUpdateComponent,
    UserNewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
