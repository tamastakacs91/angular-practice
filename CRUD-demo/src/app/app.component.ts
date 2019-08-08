import { Component, OnInit } from '@angular/core';
import { FilmsService } from './service/films.service';
import { Film } from './model/film';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CRUD-demo';
  filmList: Film[] = [];

  //az új film felvételéhez csinálunk egy film objektumot
  newFilm: Film = new Film();

  //a filter pipe-hoz készítünk egy változót, hogy a user gépelhesse, hogy mit akar keresni
  filterPhrase: string = '';

  //a gomb nyomásra való kereséshez készítünk még egy változót (nem műxik)
  filterInput: string = '';

  //a rendezéshez vettük fel ezt a változót
  orderKey: string = '';

  //minden változásra növeljük eggyel (ezzel küszöböltük ki, hogy ne csak f5-re frissüljön a tömb)
  changeCounter: number = 0;

  orderDirection: number = 1;

  //a rendezéshez elkészítjük a metódust, hogy dinamikus legyen a változó
  //a html componentben adjuk meg paraméterként, hogy majd mi alapján rendezzen
  setOrderKey(key: string): void {
    //rendezés irány: ha a key megegyezik (tehát többször kattintanak rá), akkor változtassa az ordert!
    if (key === this.orderKey) {
      this.orderDirection = this.orderDirection == 1 ? -1 : 1;
    } else {
      this.orderDirection = 1; //ha nem ugyanarra kattint, akkor mindig 1, aza növekvő legyen a default
    }
    console.log('orderDirection:', this.orderDirection);
    this.orderKey = key;
    //console.log(this.orderKey);
  }

  setfilterPhrase() {
    this.filterPhrase = this.filterInput;
  }
  resetSearch() {
    this.filterPhrase = '';
  }


  onUpdate(film: Film) {
    this.fService.update(film).subscribe(
      film => console.log('Changed:', film),
      err => console.error(err),
    )
  }

  onDelete(film: Film) {
    this.fService.remove(film.id).subscribe(
      response => {
        let index = this.filmList.indexOf(film);
        console.log(index, film);
        this.filmList.splice(index, 1);
        this.changeCounter++;

      },
      err => console.error(err),
    );
  }

  onCreate() {
    this.fService.create(this.newFilm).subscribe(
      response => {
        this.filmList.push(response);
        console.log(this.filmList);
        //a szerver az új filmet küldi vissza válaszként, ezt beletesszük a filmList tömbbe
        this.newFilm = new Film()
        //a newFilm változót visszaállítjuk new Film()-re
        this.changeCounter++;
      },
      err => console.error(err)
    )
  }

  onCancel() {
    this.newFilm = new Film();
  }

  constructor(
    private fService: FilmsService
    //ez tartja a kapcsolatot a szerverrel, beinjektáltuk, azaz felvettük a contructor paraméterei közé
    //a konstruktorba írjuk bele azokat az osztályokat, szervízeket, amikre a komponensnek szüksége van
  ) {
    /* !!!!!constructor és onInint különbségek!!!!!
    a constructor minden módosításnál lefut: ezért van az, hogy pl a második lefutásnál hibát ad ki
    az add metódusra (hisze egyszer már létrehoz egy olyan id-jú objektumot)*/
  }

  ngOnInit() {
    //Így is meg lehet hívni a metódusokat!
    this.fService.getAll().subscribe(
      // films => console.log("All films: ", films)

      //másképp kifejezve: function(films){this.filmList = films;}
      films => this.filmList = films
    )
  }

}

//két metódus:
//onUpdate
//onDelete
