import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders: Order[] = [
    new Order(),
    new Order(),
    new Order(),
  ];

//apiUrl: string = 'http://localhost:3210/orders';
=======
  apiUrl: string = 'http://localhost:3210/api/orders';
>>>>>>> e0a2426d2b52331ee45aba4f3a8b1d3191ad073f

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);


    /* return new Observable( observer => {
      observer.next(this.orders);
    }); */
  }

}
