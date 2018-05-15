import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { HTTP } from '@ionic-native/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  private users:any = null;
  private url = 'https://jsonplaceholder.typicode.com';
  
  constructor(public navCtrl: NavController, private http: Http) {

  }

  ionViewWillEnter() {
    console.log("entered");
    
    this.users = this.http.get(this.url + '/users').map(res => res.json()).subscribe(data => {
        this.users = data;
        console.log("users: ", this.users);
    });
    
  }

}
