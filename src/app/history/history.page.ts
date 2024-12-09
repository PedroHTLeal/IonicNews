import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
})
export class HistoryPage {
  history: any[] = [];

  constructor(private storage: Storage) {
    this.loadHistory();
  }

  async loadHistory() {
    const savedHistory = await this.storage.get('conversionHistory');
    if (savedHistory) {
      this.history = savedHistory;
    }
  }

  clearHistory() {
    this.history = [];
    this.storage.set('conversionHistory', []);
  }
}
