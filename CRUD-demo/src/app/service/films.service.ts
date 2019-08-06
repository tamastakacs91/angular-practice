import { Injectable } from '@angular/core';
import { Film } from '../model/film';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(({
  providedIn: 'root'
}))

export class FilmsService {

  jsonUrl: string = 'http://localhost:3000/film';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Film[]> {
    return this.http.get<Film[]>(this.jsonUrl);
  };

  getOne(id: string | number): Observable<Film> {
    return this.http.get<Film>(`${this.jsonUrl}/${id}`);
  };

  add(film: Film): Observable<any> {
    return this.http.post<Observable<any>>(this.jsonUrl, film);
  };

  update(film: Film): Observable<any> {
    return this.http.put(`${this.jsonUrl}/${film.id}`, film);
  }

  remove(film: any | number): Observable<any> {
    film = film.id ? film.id : film;
    return this.http.delete(`${this.jsonUrl}/${film}`);
  };

}
