import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IQuote} from "../../providers/data/data.interface";

@Component({
  selector: 'quote-card',
  templateUrl: 'quote-card.html'
})
export class QuoteCardComponent {

  @Input('quote')
  quote: IQuote;

  @Input('isSharing')
  isSharing: boolean = false;

  @Output('onClick')
  onClick: EventEmitter<any> = new EventEmitter<any>();

  @Output('onShare')
  onShare: EventEmitter<any> = new EventEmitter<any>();

  @Output('onDelete')
  onDelete: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }
}
