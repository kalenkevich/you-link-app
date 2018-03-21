import BaseContentProvider from './base-content-provider';
import HttpRequest from '../utils/http-request';
import getYouTubeID from 'get-youtube-id';

const providerId = 'YouTube';

export default class YouTubeContentProvider extends BaseContentProvider {
  constructor(options) {
    super(...arguments);

    this.apiKey = options.apiKey;
  }

  sendSearchRequest({searchQuery}) {
    return HttpRequest.sendRequest('GET', `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${this.apiKey}`);
  }

  sendGetVideoByIdRequest(videoId) {
    return HttpRequest.sendRequest('GET', `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${this.apiKey}`);
  }

  parseVideoId(url) {
    return getYouTubeID(url, { fazzy: true });
  }

  adaptContent(contentsRaw = []) {
    return (contentsRaw.items || []).map(contentRaw => {
      const content = {};

      content.type = contentRaw.id.kind;
      content.title = contentRaw.snippet.title;
      content.provider = providerId;
      content.id = contentRaw.id.videoId;
      content.ulr = `https://youtube.com/${contentRaw.id.videoId}`;
      content.preview = {
        imageUrl: contentRaw.snippet.thumbnails.high.url,
        width: contentRaw.snippet.thumbnails.high.width,
        height: contentRaw.snippet.thumbnails.high.height
      };
      content.datePublished = new Date(contentRaw.snippet.publishedAt);
      content.description = contentRaw.snippet.description;
      content.author = contentRaw.snippet.channelTitle;

      return content;
    });
  }
}

export {providerId};
