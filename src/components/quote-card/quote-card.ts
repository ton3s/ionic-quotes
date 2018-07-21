import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IQuote} from "../../providers/data/data.interface";

@Component({
  selector: 'quote-card',
  templateUrl: 'quote-card.html'
})
export class QuoteCardComponent {

  @Input('quote')
  quote: IQuote;

  @Input('showOptions')
  showOptions: boolean = false;

  @Input('isFavorite')
  isFavorite: boolean = false;

  @Output('onClick')
  onClick: EventEmitter<any> = new EventEmitter<any>();

  @Output('onShare')
  onShare: EventEmitter<any> = new EventEmitter<any>();

  @Output('onFavorite')
  onFavorite: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }
}
