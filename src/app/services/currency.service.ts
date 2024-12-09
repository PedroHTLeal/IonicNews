import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl = 'https://api.exchangerate-api.com/v4/latest/'; // Usando uma API exemplo
  private exchangeRates = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  // Função para obter taxas de câmbio
  getExchangeRates(baseCurrency: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${baseCurrency}`).pipe(
      catchError((error) => {
        console.error('Erro ao buscar taxas de câmbio', error);
        throw error;
      })
    );
  }

  // Função para realizar a conversão de moedas
  convertCurrency(amount: number, fromCurrency: string, toCurrency: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${fromCurrency}`).pipe(
      catchError((error) => {
        console.error('Erro ao converter moeda', error);
        throw error;
      })
    );
  }

  // Atualizar taxas de câmbio
  updateExchangeRates(baseCurrency: string): void {
    this.getExchangeRates(baseCurrency).subscribe((rates) => {
      this.exchangeRates.next(rates);
    });
  }

  // Obter taxas de câmbio armazenadas localmente
  getStoredRates(): any {
    return this.exchangeRates.getValue();
  }
}
