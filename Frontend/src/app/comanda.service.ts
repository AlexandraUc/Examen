import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Comanda, PostComanda } from './comanda/comanda.model';

@Injectable({
  providedIn: 'root'
})
export class ComandaService {
  private url = 'https://localhost:7207/api/Comanda';

  constructor(private http: HttpClient) { }

  getComenzi(): Observable<Comanda[]> {
    return this.http.get<Comanda[]>(this.url);
  }

  PostComanda(co: PostComanda): Observable<any> {
    return this.http.post<any>(this.url, co);
  }
}
