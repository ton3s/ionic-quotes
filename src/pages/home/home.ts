import {Component, ViewChild} from '@angular/core';
import {NavController, Slides, ToastController} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data.provider";
import {IQuote} from "../../providers/data/data.interface";
import {SocialProvider} from "../../providers/social/social.provider";
import {FavoritesProvider} from "../../providers/favorites/favorites.provider";
import {default as swal} from "sweetalert2";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;
  quotes: IQuote[];
  currentIndex: number;

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              public dataProvider: DataProvider,
              public socialProvider: SocialProvider,
              public favoritesProvider: FavoritesProvider) {

    this.favoritesProvider.getQuoteIndex()
      .then(index => this.currentIndex = index);
  }

  ionViewDidLoad() {
    this.dataProvider.getQuotes()
      .then(quotes => this.quotes = quotes);
  }

  slideChanged() {
    this.currentIndex = this.slides.getActiveIndex();
    this.favoritesProvider.setQuoteIndex(this.currentIndex);
  }

  isFavorite(quote: IQuote) {
    return this.favoritesProvider.isFavorite(quote);
  }

  toggleFavorite(quote: IQuote, fab) {
    fab.close();
    if (this.isFavorite(quote)) {
      this.favoritesProvider.removeFavorite(quote)
        .then(_ => this.presentToast("Removed from Favorites"));
    }
    else {
      this.favoritesProvider.saveFavorite(quote)
        .then(_ => this.presentToast("Added to Favorites"))
    }
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 1500,
      position: 'middle',
      cssClass: 'toast-content'
    });
    toast.present();
  }

}
