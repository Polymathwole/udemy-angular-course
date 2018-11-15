import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  count = 1;
  interval;
  @Output() incrementNum = new EventEmitter<number>();
  @Output() gameStopped = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onGameStart() {
    this.interval = setInterval(() => {
      this.incrementNum.emit(this.count++);
    }, 1000);
  }

  onGameStop() {
    clearInterval(this.interval);
    this.gameStopped.emit();
    this.count = 1;
  }
}
