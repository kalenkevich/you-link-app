import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import Content from '../../models/content';
import {environment} from '../../../environments/environment';
import YouLink, {YoutubeProviderId, BingProviderId, TwitterProviderId} from './lib';

@Injectable()
export class ContentProviderService {

  constructor() {
    YouLink.init([{
      contentProvider: YoutubeProviderId,
      apiKey: environment.ContentProvider.YouTube.apiKey,
      searchEnabled: true,
      getByUrlEnabled: true
    }, {
      contentProvider: BingProviderId,
      apiKey: environment.ContentProvider.Bing.apiKey,
      searchEnabled: true,
      getByUrlEnabled: true
    }, {
      contentProvider: TwitterProviderId,
      apiKey: environment.ContentProvider.Twitter.apiKey,
      searchEnabled: false,
      getByUrlEnabled: true
    }]);
  }

  search(searchOptions): Observable<Content[]> {
    return new Observable((observer) => {
      YouLink.search(searchOptions).then(foundedContentsRaw => {
        const foundedContents: Content[] = (foundedContentsRaw || []).map(contentRaw => new Content(contentRaw));

        observer.next(foundedContents);
      }).catch(error => observer.error(error));
    });
  }

  getContentByUrl(url): Observable<Content> {
    return new Observable(observer => {
      YouLink.getByUrl(url)
        .then(contentRaw => observer.next(new Content(contentRaw)))
        .catch(error => observer.error(error));
    });
  }
}
