import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './page/index/index.component';
import { UsersComponent } from './page/users/users.component';


const appRoutes: Routes = [
  {
    path: "", //üres - ez a localhost:4200, kvázi a főoldal
    component: IndexComponent
  },
  {
    path: "users",
    component: UsersComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IndexComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
