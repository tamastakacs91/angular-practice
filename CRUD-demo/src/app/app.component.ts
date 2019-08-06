import { Component } from '@angular/core';
import { FilmsService } from './service/films.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD-demo';

  constructor(
    private fService: FilmsService
  ) {
    this.fService.getAll().forEach(value => {
      console.log("All films: ", value);
    });
    this.fService.getOne(1).forEach(value => {
      console.log("Film with ID1: ", value);
    });
    this.fService.add({ id: 7, title: 'Lord of the Rings', release: 2004, actor: 'Ian McKellen' })
      .forEach(value => {
        console.log('Added film: ', value);
      });
    // this.fService.remove(3).forEach(value => {
    //   console.log('Remove success');
    // });
  }
}
