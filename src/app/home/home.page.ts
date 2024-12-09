import { Component } from '@angular/core';
import { StorageHelper } from 'src/global/storage-helper';
import { CurrencyService } from 'src/services/currency.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  sourceCurrency: string = 'USD';
  targetCurrency: string = 'BRL';
  amount: number = 1;
  convertedValue: number = 0;
  currencies: string[] = ['USD', 'BRL', 'EUR', 'GBP', 'JPY'];

  constructor(
    private currencyService: CurrencyService,
    private storageHelper: StorageHelper
  ) {}

  fetchExchangeRates() {
    this.currencyService.getExchangeRates(this.sourceCurrency).subscribe((data: { conversion_rates: { [x: string]: number; }; }) => {
      console.log(data);
      if (data && data.conversion_rates) {
        this.convertedValue = this.amount * data.conversion_rates[this.targetCurrency];
        this.storageHelper.saveConversion({
          date: new Date().toISOString(),
          source: this.sourceCurrency,
          target: this.targetCurrency,
          amount: this.amount,
          result: this.convertedValue
        });
      }
    });
  }
  

  invertCurrencies() {
    [this.sourceCurrency, this.targetCurrency] = [this.targetCurrency, this.sourceCurrency];
    this.fetchExchangeRates();
  }
}
