import BaseContentProvider from './base-content-provider';
import HttpRequest from "../utils/http-request";

const providerId = 'Bing';

export default class BingContentProvider extends BaseContentProvider {
  constructor(options) {
    super(...arguments);
  }

  get providerId() {
    return providerId;
  }

  sendSearchRequest({searchQuery}) {
    const options = {headers: {'Ocp-Apim-Subscription-Key': this.apiKey}};

    return HttpRequest.sendRequest('GET', `https://api.cognitive.microsoft.com/bing/v7.0/videos/search?q=${searchQuery}`, null, options);
  }

  sendGetContentByIdRequest(videoId) {
    const options = {headers: {'Ocp-Apim-Subscription-Key': this.apiKey}};

    return HttpRequest.sendRequest('GET', `${videoId}&key=${this.apiKey}`, null, options);
  }

  parseContentId(url) {
  }

  adaptContent(contentsRaw = []) {
    return (contentsRaw.value || []).map(contentRaw => {
      const content = {};

      content.type = 'video';
      content.title = contentRaw.name;
      content.provider = providerId;
      content.id = contentRaw.videoId;
      content.ulr = content.contentUrl;
      content.preview = {
        imageUrl: contentRaw.thumbnailUrl,
        width: contentRaw.thumbnail.width,
        height: contentRaw.thumbnail.height
      };
      content.datePublished = new Date(contentRaw.datePublished);
      content.description = contentRaw.description;
      content.author = contentRaw.publisher[0].name;

      return content;
    });
  }
}

export {providerId};
