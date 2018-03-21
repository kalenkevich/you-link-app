class Preview {
  imageUrl: string;
  width: number;
  height: number;

  constructor(previewRaw) {
    this.imageUrl = previewRaw.imageUrl;
    this.width = previewRaw.width;
    this.height = previewRaw.height;
  }
}

export default class Content {
  id: string;
  type: string;
  provider: string;
  ulr: string;
  preview: Preview;
  datePublished: Date;
  title: string;
  description: string;
  author: string;

  constructor(contentRaw) {
    this.id = contentRaw.id;
    this.type = contentRaw.type;
    this.provider = contentRaw.provider;
    this.ulr = contentRaw.ulr;
    this.preview = new Preview(contentRaw.preview);
    this.datePublished = new Date(contentRaw.datePublished);
    this.title = contentRaw.title;
    this.description = contentRaw.description;
    this.author = contentRaw.author;
  }

  get isVideo() {
    return this.type === 'video';
  }
}
