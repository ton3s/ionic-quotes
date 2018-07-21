import {Component, ViewChild} from '@angular/core';
import {NavController, Slides} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data.provider";
import {IQuote} from "../../providers/data/data.interface";
import {SocialProvider} from "../../providers/social/social.provider";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;
  quotes: IQuote[];
  currentIndex: number = 0;

  constructor(public navCtrl: NavController,
              public dataProvider: DataProvider,
              public socialProvider: SocialProvider) {
  }

  ionViewDidLoad() {
    this.dataProvider.getQuotes().then(quotes => this.quotes = quotes);
  }

  slideChanged() {
    this.currentIndex = this.slides.getActiveIndex();
  }

}
