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
  //a get metódus Observable-el tér vissza.
  //ha a metódus után megadjuk, hogy pontosan milyen Observable-el tér vissza (nem any),
  //akkor meg kell határozni a típust a get után!

  getOne(id: string | number): Observable<Film> {
    return this.http.get<Film>(`${this.jsonUrl}/${id}`);
  };
  //itt is megadjuk a típust. jelen esetben EGY filmmel fog visszatérni az ID alapján

  create(film: Film): Observable<Film> {
    return this.http.post<Film>(this.jsonUrl, film);
  };

  update(film: Film): Observable<Film> {
    return this.http.put<Film>(`${this.jsonUrl}/${film.id}`, film);
  }
  //paraméterek: hova küldje az adatot és mit küldjön

  // remove(film: any | number): Observable<any> {
  //   film = film.id ? film.id : film;
  //   return this.http.delete(`${this.jsonUrl}/${film}`);
  // };

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.jsonUrl}/${id}`);
  };

}

//1. létrehoztunk egy class-t, amiben definiáltuk a Film-et (model/film.ts)
//2. felveszünk egy változót, ami a json fájl URL-je (itt)
//3. appModule-ba import a HttpClientModule és berak az Imports tömbbe ugyanitt
//4. itt a service-ben a megadjuk a constructor paraméterének a HttpClient-et. importálni is kell fent!


//json server dokumentáció - hogyan lehet finomítani a kiválasztást