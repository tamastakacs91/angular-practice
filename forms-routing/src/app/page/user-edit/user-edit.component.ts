import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User();

  constructor(
    private ar: ActivatedRoute, //Angular-os beépített. Mindig azt figyeli, hogy melyik route van betöltve. Observable
    private userService: UserService) {
    this.ar.params.forEach(params => { //a forEach egy leegyszerűsített Observable. Visszaad egy promis-et. Egyszer feliratkozik,
      //kiolvassa, ami kell neki és leiratkozik
      //console.log(params.id);
      this.user = this.userService.get(params.id)
    })
    //a params az egy observable (az oldalra kattintáskor kiolvassa az értéket és megszűnik)
    //a params-ban vannak benne az url-es változók
  }

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


//FORMS
//1. a form adatait mindig vegyük fel egy objektumba
//2. a formot figyeljük eventbindinggal, a natív eseményt adjuk át ($event)
//3. metódus - paraméter: Event (DOM esemény), preventDefault - nem tölti újra az oldalt

//ROUTING
//1. app-routing module: milyen url hatására milyen komponens jelenjen meg
//2. menü vagy navbar elkészítése külön komponensbe. az anchorban href helyett a routerLink direktívát
//használjuk. Itt már kell / jel a link elé. Pl. routerLink = "/users"
//3. elhelyezzük a router-outletet, ahol meg akarjuk jeleníttetni a tartalmat

//4. Hogyan tudjuk meg, hogy milyen URL kell?
//params Observable. ezt átalakítjuk promise-szé forEach-csel és kiszedem belőle az adatot