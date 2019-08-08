import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: any = {
    id: 1,
    name: 'Takács Tamás',
    age: 27,
    email: 'tomi@gmail.com',
    password: 'négyCsillagAJelszavam*88'
  }

  constructor() { }

  ngOnInit() {
  }

  //eventbinding, hogy a gomb megnyomására ne frissüljön mindig az oldal
  onSubmit(ev: Event): void {
    ev.preventDefault();
    //preventDefault - megakadályozza, hogy úgy működjön, ahogy alapból van programozva. Tehát:
    //itt nem fogja újratölteni az oldalt minden gombnyomás után (submit alapfunkció)

    console.log('Itt hívom meg a service update metódusát (pl. this.userService.update )!', this.user);
  }

}

//1. a form adatait mindig vegyük fel egy objektumba
//2. a formot figyeljük eventbindinggal, a natív eseményt adjuk át ($event)
//3. metódus - paraméter: Event (DOM esemény), preventDefault - nem tölti újra az oldalt