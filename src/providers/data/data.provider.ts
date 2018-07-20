import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {IQuote} from "./data.interface";

@Injectable()
export class DataProvider {

  quotesUrl = "assets/data/quotes.txt";

  constructor(public http: HttpClient) {
  }

  getQuotes(): Promise<IQuote[]> {
    return this.http.get(this.quotesUrl, {responseType: 'text'})
      .map(res => res.split('\n').map(line => {
        let arr = line.split(";;");
        return {
          id: parseInt(arr[0]),
          quote: arr[1],
          category: arr[2],
          author: arr[3]
        };
      }))
      .toPromise();
  }
}
