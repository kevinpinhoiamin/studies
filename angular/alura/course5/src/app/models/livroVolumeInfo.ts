import { Item } from './interfaces';

export class LivroVolumeInfo {
  title?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: Date;
  description?: string;
  previewLink?: string;
  thumbnail?: string;

  constructor(item: Item) {
    this.title = item.volumeInfo?.title;
    this.authors = item.volumeInfo?.authors;
    this.publisher = item.volumeInfo?.publisher;
    this.publishedDate = item.volumeInfo?.publishedDate;
    this.description = item.volumeInfo?.description;
    this.previewLink = item.volumeInfo?.infoLink;
    this.thumbnail = item.volumeInfo?.imageLinks?.thumbnail;
  }
}
