import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ComandaProdus } from './comanda-produs/comprod.model';

@Injectable({
  providedIn: 'root'
})
export class ComandaProdusService {
  private url = 'https://localhost:7207/api/ComandaProdus';

  constructor(private http: HttpClient) { }

  PutComandaProdus(copr: ComandaProdus): Observable<any> {
    return this.http.put<any>(this.url, copr);
  }
}
