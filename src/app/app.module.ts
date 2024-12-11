import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { HomePageModule } from './home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HomePageModule,
  ],
})
export class AppModule {}
