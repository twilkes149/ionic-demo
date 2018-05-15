import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'new-page',
  templateUrl: 'newPage.html'
})
export class NewPage {
  public prevPageText: string;

  constructor (public navCtrl: NavController, public params: NavParams) {
    this.prevPageText = params.get("myArguement");
  }
}