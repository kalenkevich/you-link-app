import {Component, OnInit} from '@angular/core';
import Content from '../../models/content';
import {ContentProviderService} from '../../services/content-provider/content-provider.service';
import {UtilsService} from '../../services/utils/utils.service';

@Component({
  selector: 'app-content-search',
  templateUrl: './content-search.component.html',
  styleUrls: ['./content-search.component.scss']
})
export class ContentSearchComponent implements OnInit {
  contents: Content[];

  isDataLoaded: boolean;

  selectedContent: Content;

  constructor(private contentProvider: ContentProviderService) {
    this.contents = [];
    this.isDataLoaded = true;
    this.selectedContent = null;
  }

  ngOnInit() {
  }

  onSearch(searchText) {
    UtilsService.isUrl(searchText) ? this.getContentByUrl(searchText) : this.search(searchText);
  }

  onContentPreviewClick(contentItem: Content) {
    this.selectedContent = contentItem;
  }

  search(searchQuery) {
    this.isDataLoaded = false;

    this.contentProvider.search({searchQuery})
      .subscribe((contents: Content[]) => {
        this.contents = contents;
        this.isDataLoaded = true;
      });
  }

  getContentByUrl(url) {
    this.isDataLoaded = false;

    this.contentProvider.getContentByUrl(url).subscribe(content => {
      this.contents = [content];
      this.isDataLoaded = true;
    });
  }
}
