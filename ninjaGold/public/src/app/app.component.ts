import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Ninja Gold';
  gold: number = 0;
  msgs = [];

  constructor(
    private _http: HttpService
  ) {}

  ngOnInit(){

  }

  random(min, max) {
    return Math.floor(Math.random() * (min - max)) + max;
  }

  farm() {
      let farmGold: number = this.random(10, 20);
      this.gold += farmGold;
      this.msgs.unshift(`You earned ${farmGold} from the Farm!`);
      return this.gold;
  }

  cave() {
    let caveGold: number = this.random(5, 10);
    this.gold += caveGold;
    this.msgs.unshift(`You earned ${caveGold} from the Cave!`);
    return this.gold;
  }
   

  house() {
    let houseGold: number = this.random(2, 5);
    this.gold += houseGold;
    this.msgs.unshift(`You earned ${houseGold} from the House!`);
    return this.gold;
  }


    casino() {
      let casinoGold: number = this.random(-100, 100);
      this.gold += casinoGold;
      if (casinoGold < 0){
        this.msgs.unshift(`You lost ${casinoGold} at the Casino, you degenerate!`)
      }
      else {
        this.msgs.unshift(`You earned ${casinoGold} at the Casino!`)
      }
    }


}
