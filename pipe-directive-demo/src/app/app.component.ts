import { Component } from '@angular/core';
import { StudentService } from './service/student.service';
import { Student } from './model/student';
import { Observable } from 'rxjs';
import { FootballService } from './service/football.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe-directive-demo';

  studentList: Student[] = [];
  filterKey: string = "name";
  filterPhrase: string = "";
  listObservable: Observable<any>;

  constructor(
    private studentService: StudentService, private fService: FootballService
  ) {
    this.studentList = this.studentService.list;
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
      () => console.log('complete'),
    )
  }



}
