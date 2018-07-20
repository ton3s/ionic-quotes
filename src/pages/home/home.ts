import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data.provider";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public dataProvider: DataProvider) {
  }

  ionViewDidLoad() {
    this.dataProvider.getQuotes();
  }

}
