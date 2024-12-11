import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://v6.exchangerate-api.com/v6/194cabd5acab5f7a37771281/latest/USD';

  constructor(private http: HttpClient) {}

  // Método para obter as taxas de câmbio
  getTaxasDeCambio(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
