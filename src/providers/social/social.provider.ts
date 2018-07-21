import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {IQuote} from "../data/data.interface";

@Injectable()
export class SocialProvider {

  isSharing: boolean = false;

  constructor(public http: HttpClient) {
  }

  setShareStatus(status, fab?) {
    if (fab) fab.close();
    this.isSharing = status;
  }

  share(quote: IQuote) {
    return {
      config: [
        {
          facebook: {
            iconStyleclass: 'fa fa-facebook social-icon',
            socialShareUrl: 'https://quotes.antoniocunanan.com'
          }
        },
        {
          twitter: {
            iconStyleclass: 'fa fa-twitter social-icon',
            socialShareUrl: 'https://quotes.antoniocunanan.com'
          }
        },
        {
          reddit: {
            iconStyleclass: 'fa fa-reddit social-icon',
            socialShareText: 'Check out this quote!',
            socialShareUrl: `"${quote.text}" - ${quote.author} \n\nFind more quotes like this @ https://quotes.antoniocunanan.com`
          }
        },
        {
          email: {
            iconStyleclass: 'fa fa-envelope social-icon',
            socialShareSubject: 'Check out this quote!',
            socialShareBody: `"${quote.text}" - ${quote.author} \n\nFind more quotes like this @ https://quotes.antoniocunanan.com`
          }
        }
      ]
    };
  }

}
