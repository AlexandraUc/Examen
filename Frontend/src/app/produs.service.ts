import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Produs, PostProdus } from './produs/produs.model';

@Injectable({
  providedIn: 'root'
})
export class ProdusService {
  private url = 'https://localhost:7207/api/Produs';

  constructor(private http: HttpClient) { }

  getProduse(): Observable<Produs[]> {
    return this.http.get<Produs[]>(this.url);
  }

  postProdus(pr: PostProdus): Observable<any> {
    return this.http.post<any>(this.url, pr);
  }
}
