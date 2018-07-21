import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {IQuote} from "../../providers/data/data.interface";
import {DataProvider} from "../../providers/data/data.provider";
import {SocialProvider} from "../../providers/social/social.provider";
import {default as swal} from "sweetalert2";
import {FavoritesProvider} from "../../providers/favorites/favorites.provider";

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  searchTerm: string = '';
  quotes: IQuote[] = [];
  isSharing = [];
  currentIndex = 0;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public dataProvider: DataProvider,
              public socialProvider: SocialProvider,
              public favoritesProvider: FavoritesProvider) {
  }

  ionViewDidLoad() {
    this.dataProvider.getQuotes().then(quotes => this.quotes = quotes);
  }

  setFilteredItems() {
    this.dataProvider.filterQuotes(this.searchTerm)
      .then((quotes: IQuote[]) => {
        this.quotes = quotes;
      });
  }

  toggleOptions(favorite: IQuote) {
    this.isSharing[favorite.id] = !this.isSharing[favorite.id] || false;
  }

  isFavorite(quote: IQuote) {
    return this.favoritesProvider.isFavorite(quote);
  }

  toggleFavorite(quote: IQuote) {
    if (this.isFavorite(quote)) {
      this.favoritesProvider.removeFavorite(quote)
        .then(_ => this.presentToast("Removed from Favorites"));
    }
    else {
      this.favoritesProvider.saveFavorite(quote)
        .then(_ => this.presentToast("Added to Favorites"))
    }
  }

  share(index) {
    this.currentIndex = index;
    this.socialProvider.setShareStatus(true);
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
