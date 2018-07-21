import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {IQuote} from "../../providers/data/data.interface";
import {FavoritesProvider} from "../../providers/favorites/favorites.provider";
import {default as swal} from "sweetalert2";
import {SocialProvider} from "../../providers/social/social.provider";

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  favorites: IQuote[] = [];
  isSharing = [];
  currentIndex = 0;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public favoritesProvider: FavoritesProvider,
              public socialProvider: SocialProvider) {
  }

  ionViewDidLoad() {
    this.loadFavorites();
  }

  toggleOptions(favorite: IQuote) {
    console.log("toggleOptions");
    this.isSharing[favorite.id] = !this.isSharing[favorite.id] || false;
  }

  removeFavorite(favorite: IQuote) {
    this.favoritesProvider.removeFavorite(favorite)
      .then(_ => {
        this.loadFavorites();
        swal({
          title: `Quote Removed!`,
          text: `Quote was removed from your favorites!`,
          confirmButtonClass: "btn btn-success",
          type: "success"
        });
      });
  }

  promptRemoveFavorite(favorite: IQuote) {
    this.toggleOptions(favorite);
    swal({
      title: 'Remove Quote?',
      text: `Are you sure you want delete this quote from your favorites?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonClass: "btn btn-success",
      cancelButtonClass: "btn btn-danger",
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) this.removeFavorite(favorite);
    }).catch(console.log);
  }

  loadFavorites() {
    this.favoritesProvider.getFavorites().then(favorites => this.favorites = favorites);
  }

  share(index) {
    this.currentIndex = index;
    this.socialProvider.setShareStatus(true);
  }

}
