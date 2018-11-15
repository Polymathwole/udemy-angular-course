import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddValues:number[] = [];
  evenValues:number[] = [];

  onGameStop(){
    this.oddValues = [];
    this.evenValues = [];
  }

  onNumberIncrement(value:number){
    if (value%2===0){
      this.evenValues.push(value);
    }
    else{
      this.oddValues.push(value);
    }
  }
}
