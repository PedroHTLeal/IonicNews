import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  historico: any[] = [];

  constructor(private navController: NavController) {}

  ngOnInit() {
    const historicoSalvo = localStorage.getItem('historico');
    if (historicoSalvo) {
      this.historico = JSON.parse(historicoSalvo);
    }
  }

  excluirHistorico() {
    localStorage.removeItem('historico');
    this.historico = [];
  }

  excluirRegistro(index: number) {
    this.historico.splice(index, 1);
    localStorage.setItem('historico', JSON.stringify(this.historico));
  }

  voltarParaConversao() {
    this.navController.navigateBack('/conversion');
  }
}
