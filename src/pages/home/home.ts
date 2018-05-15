import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewPage } from '../newPage/newPage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public something:string;

  constructor(public navCtrl: NavController) {

  }

  buttonClicked() {
    console.log("button clicked");

    this.navCtrl.push(NewPage, {myArguement: this.something});
  }
}
