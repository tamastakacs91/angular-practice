import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //User típusú tömb, amibe felveszünk két usert
  list: User[] = [
    new User({
      id: 1,
      name: 'Takács Tamás',
      age: 27,
      email: 'tomi@gmail.com',
      password: 'négyCsillagAJelszavam*88'
    }),
    new User({
      id: 2,
      name: 'Takács Norbert',
      age: 25,
      email: 'norbi@gmail.com',
      password: 'whatevvahhh*32'
    })
  ]

  constructor() { }

  get(id: number): User {
    return this.list.filter(user => user.id == id)[0] || new User();
  }

}
