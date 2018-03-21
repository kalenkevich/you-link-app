import BaseContentProvider from './base-content-provider';
import HttpRequest from "../utils/http-request";

const providerId = 'Twitter';

export default class TwitterContentProvider extends BaseContentProvider {
  constructor(options) {
    super(...arguments);

    if (!options.consumerKey) {
      throw 'consumerKey should be provided';
    }

    if (!options.consumerSecret) {
      throw 'consumerSecret should be provided';
    }

    this.consumerKey = options.consumerKey;
    this.consumerSecret = options.consumerSecret;
  }

  get providerId() {
    return providerId;
  }

  async sendSearchRequest({searchQuery}) {
    if (!this.bearerToken) {
      await this.setupBearerToken();
    }

    const options = {
      headers: {
        'Authorization': `Bearer ${this.bearerToken}`,
      }
    };

    return HttpRequest.sendRequest('GET', `https://api.twitter.com/1.1/search/tweets.json?q=${searchQuery}&result_type=popular`, null, options);
  }

  async sendGetContentByIdRequest(videoId) {
    if (!this.bearerToken) {
      await this.setupBearerToken();
    }

    const options = {
      headers: {
        'Authorization': `Bearer ${this.bearerToken}`,
      }
    };

  }

  async setupBearerToken() {
    const base64EncodedKey = new Buffer(`${this.consumerKey}:${this.consumerSecret}`).toString('base64');
    const options = {
      headers: {
        'Authorization': `Basic ${base64EncodedKey}`,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8.'
      }
    };
    const bearerTokenResponse = await HttpRequest.sendRequest('POST', 'https://api.twitter.com/oauth2/token', {
      grant_type: 'client_credentials'
    }, options);

    this.bearerToken = bearerTokenResponse.access_token;
  }

  parseContentId(url) {

  }

  adaptContent(contentsRaw = []) {

  }
}

export {providerId};
