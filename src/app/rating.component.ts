import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-rating',
  template: `
    <i *ngFor="let number of numbers" class="fa fa-star" aria-hidden="true"></i>
  `,
})
export class RatingComponent {
  @Input() public starValue;

  public round;
  public numbers;
  constructor() {
    // console.log(this.starValue);
    this.round = Math.round(this.starValue);
    // console.log(this.round);
    this.numbers = Array(5)
      .fill(0)
      .map((x, i) => i);
  }
}
