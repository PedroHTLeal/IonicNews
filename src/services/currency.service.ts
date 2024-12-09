import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = 'https://v6.exchangerate-api.com/v6/194cabd5acab5f7a37771281/latest/USD';

  constructor(private http: HttpClient) {}

  getExchangeRates(base: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${base}`);
  }
}
