import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchText: string;

  @Output()
  search = new EventEmitter<string>();

  constructor() {
    this.searchText = '';
  }

  ngOnInit() {
  }

  onSearchButtonClick() {
    if (this.searchText) {
      this.search.emit(this.searchText);
    }
  }
}
