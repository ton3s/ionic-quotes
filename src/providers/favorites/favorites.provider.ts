import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {IQuote} from "../data/data.interface";
import {Storage} from '@ionic/storage';

@Injectable()
export class FavoritesProvider {

  public favorites: IQuote[] = [];

  constructor(public http: HttpClient,
              public storage: Storage) {
  }

  getFavorites(): Promise<IQuote[]> {
    return new Promise((resolve, reject) => {
      if (this.favorites.length > 0) {
        resolve(this.favorites)
      }
      else {
        this.storage.get('favorites').then(favorites => {
          this.favorites = [];
          if (favorites) {
            this.favorites = favorites;
          }
          resolve(this.favorites);
        }).catch(reject);
      }
    });
  }

  saveFavorite(quote: IQuote): void {
    // Check if it already exists in the users favorites
    if (!this.favorites.find(favorite => favorite.id === quote.id)) {
      this.favorites.push(quote);
      this.storage.set('favorites', this.favorites);
    }
  }

  removeFavorite(quote: IQuote): void {
    let index = this.favorites.map(favorite => favorite.id).indexOf(quote.id);
    if (index > -1) {
      this.favorites.splice(index, 1);
      this.storage.set('favorites', this.favorites);
    }
  }

  isFavorite(quote: IQuote): boolean {
    return this.favorites.map(favorite => favorite.id).indexOf(quote.id) > -1;
  }

}
