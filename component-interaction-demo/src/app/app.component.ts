import { Component } from '@angular/core';
import { Hero } from './model/hero';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-interaction-demo';

  heroes: Hero[] = [
    { name: "Bosmbasto", address: "New York", superpower: "Can explode" },
    { name: "IceMan", address: "New York", superpower: "Can frose" },
    { name: "Captain Planet", address: "Budapest", superpower: "Can save the Earth" },
  ];

  selectedHero: Hero = this.heroes[0];

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  };

  heroChanged(hero: Hero): void {
    console.log('changed Hero: ', hero);
  };

  listObservable: Observable<any>;

  constructor() {
    this.listObservable = new Observable(observer => {
      let to = setTimeout(() => {
        observer.next('Megjöttem');
      }, 15000);

      let to2 = setTimeout(() => {
        observer.complete();
      }, 20000);
    });

    this.listObservable.subscribe(
      value => console.log(value),
      error => console.error(error),
      complete => console.log('complete'),
    )

  }
}
