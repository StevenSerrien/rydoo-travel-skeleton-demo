import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {
  @Input() hotelName: string;
  @Input() rating: number;
  @Input() address: string;
  @Input() imgUrl: string;

  constructor() { }

  ngOnInit() {

  }
}