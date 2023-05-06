import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})

export class RatingsComponent implements OnInit {
  @Input()
  maxRating = 5;
  @Input()
  selectedRate = 0;
  @Output()
  onRating: EventEmitter<number> = new EventEmitter<number>();
  previousRate = 0;
  maxRatingArray: number[] = [];

  ngOnInit(): void {
    this.maxRatingArray = Array(this.maxRating).fill(0)
  }

  handleMouseEnter(index: number) {
    this.selectedRate = index + 1;
  }

  handleMouseLeave(): void {
    if(this.previousRate !== 0)
    {
      this.previousRate = this.previousRate;
    }else{
      this.selectedRate = 0;
    }
  }

  rate(index: number) {
    this.selectedRate = index + 1;
    this.previousRate = this.selectedRate;
  }
}
