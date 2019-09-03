import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './page/index/index.component';
import { OrderAdminComponent } from './page/order-admin/order-admin.component';
<<<<<<< HEAD
=======
import { NavComponent } from './nav/nav.component';
>>>>>>> 0b8a3c3635e6abd1bb3fcd035f99cd3788db1e67

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
<<<<<<< HEAD
    OrderAdminComponent
=======
    OrderAdminComponent,
    NavComponent
>>>>>>> 0b8a3c3635e6abd1bb3fcd035f99cd3788db1e67
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
