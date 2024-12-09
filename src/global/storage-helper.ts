import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageHelper {
  private historyKey = 'conversionHistory';

  constructor(private storage: Storage) {
    this.storage.create();
  }

  async saveConversion(conversion: any) {
    let history = (await this.storage.get(this.historyKey)) || [];
    history.unshift(conversion);
    this.storage.set(this.historyKey, history);
  }

  async getHistory() {
    return (await this.storage.get(this.historyKey)) || [];
  }

  async clearHistory() {
    this.storage.set(this.historyKey, []);
  }
}
