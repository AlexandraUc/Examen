import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Utilizator, PostUtilizator } from './utilizator/utilizator.model';

@Injectable({
  providedIn: 'root'
})
export class UtilizatorService {
  private url = 'https://localhost:7207/api/Utilizator';

  constructor(private http: HttpClient) { }

  getUtilizatori(): Observable<Utilizator[]> {
    return this.http.get<Utilizator[]>(this.url);
  }

  postUtilizator(ut: PostUtilizator): Observable<any> {
    return this.http.post<any>(this.url, ut);
  }
}
