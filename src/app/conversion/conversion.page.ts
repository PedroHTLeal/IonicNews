import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.page.html',
  styleUrls: ['./conversion.page.scss'],
})
export class ConversionPage implements OnInit {
  valor: number = 0;
  moedaOrigem: string = 'USD';
  moedaDestino: string = 'BRL';
  resultado: string = '';
  historico: any[] = [];

  moedas = [
    { sigla: 'USD', nome: 'Dólar Americano', bandeira: 'assets/flags/us.png' },
    { sigla: 'EUR', nome: 'Euro', bandeira: 'assets/flags/eu.png' },
    { sigla: 'BRL', nome: 'Real Brasileiro', bandeira: 'assets/flags/br.png' },
    { sigla: 'GBP', nome: 'Libra Esterlina', bandeira: 'assets/flags/gb.png' },
    { sigla: 'JPY', nome: 'Iene Japonês', bandeira: 'assets/flags/jp.png' },
    { sigla: 'CAD', nome: 'Dólar Canadense', bandeira: 'assets/flags/ca.png' }
  ];

  taxasDeCambio: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.carregarTaxas();
    this.carregarHistorico();
  }

  carregarTaxas() {
    const apiURL = 'https://v6.exchangerate-api.com/v6/194cabd5acab5f7a37771281/latest/' + this.moedaOrigem;
    this.http.get(apiURL).subscribe(
      (res: any) => {
        this.taxasDeCambio = res.conversion_rates;
      },
      (err) => {
        console.error('Erro ao carregar taxas de câmbio:', err);
        alert('Falha ao carregar taxas de câmbio.');
      }
    );
  }

  carregarHistorico() {
    const historicoSalvo = localStorage.getItem('historico');
    if (historicoSalvo) {
      this.historico = JSON.parse(historicoSalvo);
    }
  }

  converter() {
    if (!this.taxasDeCambio[this.moedaDestino]) {
      alert('Taxa de câmbio não encontrada.');
      return;
    }

    const taxa = this.taxasDeCambio[this.moedaDestino];
    this.resultado = (this.valor * taxa).toFixed(2);

    const novaConversao = {
      valorOriginal: this.valor,
      moedaOrigem: this.moedaOrigem,
      moedaDestino: this.moedaDestino,
      resultado: this.resultado,
      data: new Date().toLocaleString()
    };

    this.historico.unshift(novaConversao); 
    localStorage.setItem('historico', JSON.stringify(this.historico));
  }

  trocarMoedas() {
    const temp = this.moedaOrigem;
    this.moedaOrigem = this.moedaDestino;
    this.moedaDestino = temp;
    this.carregarTaxas(); 
  }
}
