import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lab3-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnChanges, OnInit{
  ngOnInit(): void {
  }

  @Input() rating = "4";
  rateWidth: number = 0;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.rateWidth = Number(this.rating) * 15;
  }

}
