import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

<<<<<<< HEAD
  orders: Order[] = [
    new Order(),
    new Order(),
    new Order(),
  ];
=======
  apiUrl: string = 'http://localhost:3210/orders';
>>>>>>> 0b8a3c3635e6abd1bb3fcd035f99cd3788db1e67

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<any> {
<<<<<<< HEAD
return this.http.get('http://localhost:3210/orders');


    /* return new Observable(observer => {
      observer.next(this.orders);
    }); //ez statikussan visszaadja az itt deklarált orders tömb adatait*/
  }
=======
    return this.http.get(this.apiUrl);


    /* return new Observable( observer => {
      observer.next(this.orders);
    }); */
  }

>>>>>>> 0b8a3c3635e6abd1bb3fcd035f99cd3788db1e67
}
