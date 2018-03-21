import HttpRequest from "../utils/http-request";

export default class BaseContentProvider {
  constructor(options) {
    this.canSearch = options.searchEnabled || true;
    this.canGetByUrl = options.getByUrlEnabled || true;
  }

  async search(searchOptions) {
    const result = await this.sendSearchRequest(searchOptions);

    return this.adaptContent(result);
  }

  async getByUrl(url) {
    const videoId = this.parseVideoId(url);
    const result = await this.sendGetVideoByIdRequest(videoId);

    return this.adaptContent(result);
  }

  sendSearchRequest() {
    throw 'should be overridden';
  }

  sendGetVideoByIdRequest() {
    throw 'should be overridden';
  }

  adaptContent() {
    throw 'should be overridden';
  }

  parseVideoId() {
    throw 'should be overridden';
  }
}
