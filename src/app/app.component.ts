import { Component, Input, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  c: number = 8000;
  i: number = 0.05;
  t: number = 12;

  constructor() {}

  ngOnInit() {}

  getSplit() {
    return (this.c * this.i) / (1 - 1 / Math.pow(1 + this.i, this.t));
  }

  getPeriods() {
    var periods = [];
    for (var i = 1; i <= this.t; i++) {
      periods.push(i);
    }
    return periods;
  }

  getInterest(n: number) {
    var value = this.c;
    for (var i = 0; i < n; i++) {
      value = value + value * this.i - this.getSplit();
    }
    return value * this.i;
  }

  getAmortization(n: number) {
    var value = this.c;
    for (var i = 0; i < n; i++) {
      value = value + value * this.i - this.getSplit();
    }
    return this.getSplit() - value * this.i;
  }

  getBalance(n: number) {
    var value = this.c;
    for (var i = 0; i < n; i++) {
      value = value + value * this.i - this.getSplit();
    }
    return value;
  }
}
