import {Component} from '@angular/core';
import {FavoritesPage} from '../favorites/favorites';
import {SearchPage} from '../search/search';
import {HomePage} from '../home/home';
import {AboutPage} from "../about/about";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FavoritesPage;
  tab3Root = SearchPage;
  tab4Root = AboutPage;

  constructor() {
  }
}
