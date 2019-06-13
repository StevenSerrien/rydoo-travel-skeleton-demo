import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  @Input() rating: number;

  maxRating: number = 5;
  maxStars: Array<any>;

  constructor() {
    this.maxStars = Array.from({length:this.maxRating},(v,k)=>k+1);
  }

  ngOnInit() {
  }

}