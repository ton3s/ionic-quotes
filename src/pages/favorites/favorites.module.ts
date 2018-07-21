import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritesPage } from './favorites';

@NgModule({
  declarations: [
    FavoritesPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritesPage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FavoritesPageModule {}
