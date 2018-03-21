import BaseContentProvider from './base-content-provider';
import HttpRequest from "../utils/http-request";

const providerId = 'Twitter';

export default class TwitterContentProvider extends BaseContentProvider {
  constructor(options) {
    super(...arguments);
  }

  get providerId() {
    return providerId;
  }

  sendSearchRequest({searchQuery}) {
    const options = {
      headers: {
        'Authorization': 'Basic',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',

      }
    };
    return HttpRequest.sendRequest('POST', `https://api.twitter.com/1.1/search/tweets.json?q=${searchQuery}&result_type=popular`, null, options);
  }

  sendGetContentByIdRequest(videoId) {

  }

  parseContentId(url) {

  }

  adaptContent(contentsRaw = []) {

  }
}

export {providerId};
