import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { OrderService } from 'src/app/service/order.service';
import { Order } from 'src/app/model/order';
=======
import { OrderService } from '../../service/order.service';
import { Order } from '../../model/order';
>>>>>>> 0b8a3c3635e6abd1bb3fcd035f99cd3788db1e67
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-admin',
  templateUrl: './order-admin.component.html',
  styleUrls: ['./order-admin.component.css']
})
export class OrderAdminComponent implements OnInit {

  list: Order[] = [];
  list$: Observable<any> = this.orderService.getAll();
<<<<<<< HEAD
  //dollárral jelöljük az observable-t
  //async pipe-hoz vettük fel. ha még akarunk valamit csinálni az adattal (nem csak megjeleníteni), akkor az async pipe nem elég!!
=======
>>>>>>> 0b8a3c3635e6abd1bb3fcd035f99cd3788db1e67

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    /* this.orderService.getAll().subscribe(
      orders => this.list = orders,
      err => console.error(err)
<<<<<<< HEAD
    ) */
=======
    ); */
>>>>>>> 0b8a3c3635e6abd1bb3fcd035f99cd3788db1e67
  }

}
