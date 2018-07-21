import {NgModule} from '@angular/core';
import {QuoteCardComponent} from './quote-card/quote-card';
import {IonicModule} from "ionic-angular";

@NgModule({
  declarations: [QuoteCardComponent],
  imports: [IonicModule],
  exports: [QuoteCardComponent]
})
export class ComponentsModule {
}
