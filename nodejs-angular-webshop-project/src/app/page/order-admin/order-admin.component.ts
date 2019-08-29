import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { Order } from 'src/app/model/order';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-admin',
  templateUrl: './order-admin.component.html',
  styleUrls: ['./order-admin.component.css']
})
export class OrderAdminComponent implements OnInit {

  list: Order[] = [];
  list$: Observable<any> = this.orderService.getAll();
  //dollárral jelöljük az observable-t
  //async pipe-hoz vettük fel. ha még akarunk valamit csinálni az adattal (nem csak megjeleníteni), akkor az async pipe nem elég!!

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    /* this.orderService.getAll().subscribe(
      orders => this.list = orders,
      err => console.error(err)
    ) */
  }

}
