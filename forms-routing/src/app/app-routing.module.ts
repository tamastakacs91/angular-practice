import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { UserListComponent } from './page/user-list/user-list.component';

//a routes tömb objektumokat vár
const routes: Routes = [
  {
    path: "", //üres - ez a localhost:4200, kvázi a főoldal
    component: IndexComponent
  },
  {
    path: "users",
    component: UserListComponent
  },
  {
    path: "**",   //nem mindegy a sorrend! a ** (fallback url) mindig a végére kell
    component: IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
