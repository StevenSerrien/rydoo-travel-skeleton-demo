import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HotelCardComponent } from '../hotel-card/hotel-card.component';
import { StarComponent } from '../hotel-card/star.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HotelCardComponent, StarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
