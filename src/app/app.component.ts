import { Component } from '@angular/core';
import { savedHotelsFromAPI } from './hotels.mock'; 

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular';
  hotels: Array<any> = savedHotelsFromAPI;
  loading: boolean = false;
}
