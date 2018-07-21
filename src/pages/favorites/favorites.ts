import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {IQuote} from "../../providers/data/data.interface";
import {FavoritesProvider} from "../../providers/favorites/favorites.provider";

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  favorites: IQuote[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public favoritesProvider: FavoritesProvider) {
  }

  ionViewDidLoad() {
    this.favoritesProvider.getFavorites().then(favorites => this.favorites = favorites);
  }

}
