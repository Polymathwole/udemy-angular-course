import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.css']
})
export class TogglerComponent implements OnInit {
  showParagraph = false;
  buttonValue = 'Display Details';
  counter = 1;
  buttonClicks = [];

  constructor() { }

  getColor(n) {
    if (n >= 4) {
      return 'blue';
    }
  }

  getDisplay() {
    return this.showParagraph ? 'block' : 'none';
  }

  ngOnInit() {
  }

  toggleParagraph(evt: Event) {
    this.showParagraph = !this.showParagraph;
    this.buttonValue = this.showParagraph ? 'Hide Details' : 'Display Details';
    this.buttonClicks.push( {count: this.counter++, timestamp: new Date(Date.now()).toLocaleString()} );
  }
}
