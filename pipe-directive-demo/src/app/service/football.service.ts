import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  jsonUrl: string = 'http://localhost:3000/film';


  constructor(private http: HttpClient) {
    this.http.get(this.jsonUrl).subscribe(
      list => console.log('film list', list),
      error => console.error(error),
      () => console.log('complete')
    );
  }
}
