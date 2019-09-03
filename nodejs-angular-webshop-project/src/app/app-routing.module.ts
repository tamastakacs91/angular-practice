import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { OrderAdminComponent } from './page/order-admin/order-admin.component';


const routes: Routes = [
<<<<<<< HEAD
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'admin/order',
    component: OrderAdminComponent
  },
  {
    path: '**',
    component: IndexComponent
  }
=======
  {path: '', component: IndexComponent},
  {path: 'admin/order', component: OrderAdminComponent},
  {path: '**', component: IndexComponent}
>>>>>>> 0b8a3c3635e6abd1bb3fcd035f99cd3788db1e67
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
