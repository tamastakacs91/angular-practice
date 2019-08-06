import { Component, OnInit } from '@angular/core';
import { FilmsService } from './service/films.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CRUD-demo';

  constructor(
    private fService: FilmsService
    //ez tartja a kapcsolatot a szerverrel, beinjektáltuk, azaz felvettük a contructor
    //paraméterébe
  ) {
    this.fService.getAll().forEach(value => {
      console.log("All films: ", value);
    });

    this.fService.getOne(1).forEach(value => {
      console.log("Film with ID1: ", value);
    });
    this.fService.add({ id: 8, title: 'Lord of the Rings', release: 2004, actor: 'Ian McKellen' })
      .forEach(value => {
        console.log('Added film: ', value);
      });
    // this.fService.remove(3).forEach(value => {
    //   console.log('Remove success');
    // });
  }

  ngOnInit() {
    //Így is meg lehet hívni a metódusokat!
    this.fService.getAll().subscribe(
      value => console.log("All films: ", value)
    )
  }

}

//constructor és onInint különbségek:
//a constructor minden módosításnál lefut: ezért van az, hogy pl a második lefutásnál hibát ad ki
//az add metódusra (hisze egyszer már létrehoz egy olyan id-jú objektumot)
