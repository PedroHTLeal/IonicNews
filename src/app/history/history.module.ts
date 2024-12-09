import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HistoryPage } from './history.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HistoryPageModule],
  declarations: [HistoryPage]
})
export class HistoryPageModule {}
