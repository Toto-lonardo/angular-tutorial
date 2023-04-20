import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioniService {

  constructor(private _http: HttpClient ) { }

  addPrenotazione(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/prenotazioni', data);
  }
  getPrenotazioniList(): Observable<any> {
    return this._http.get('http://localhost:3000/prenotazioni');
  }
}
