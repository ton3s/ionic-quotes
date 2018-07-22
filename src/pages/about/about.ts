import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UtilityProvider} from "../../providers/utility/utility.provider";

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public utilityProvider: UtilityProvider) {
  }

  ionViewDidLoad() {
  }

  openBrowser(url: string) {
    this.utilityProvider.openBrowser(url);
  }

}
