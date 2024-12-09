import { Component } from '@angular/core';
import { CurrencyService } from '../services/currency.service'; // Serviço de moeda
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-conversion',
  templateUrl: 'conversion.page.html',
  styleUrls: ['conversion.page.scss'],
})
export class ConversionPage {
  amount: number = 0;
  selectedCurrencyFrom = 'USD';
  selectedCurrencyTo = 'EUR';
  convertedValue: number = 0;

  constructor(private currencyService: CurrencyService, private navCtrl: NavController) {}

  convertCurrency() {
    this.currencyService.getExchangeRates(this.selectedCurrencyFrom).subscribe((data) => {
      const rate = data.rates[this.selectedCurrencyTo];
      this.convertedValue = this.amount * rate;
    });
  }

  goBack() {
    this.navCtrl.navigateBack('/home'); // Voltar para a página principal
  }
}
