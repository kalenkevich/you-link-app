import {Component, Input, OnInit} from '@angular/core';
import Content from '../../models/content';

@Component({
  selector: 'app-content-view-placeholder',
  templateUrl: './content-view-placeholder.component.html',
  styleUrls: ['./content-view-placeholder.component.scss']
})
export class ContentViewPlaceholderComponent implements OnInit {
  @Input()
  content: Content;

  constructor() {
    this.content = null;
  }

  ngOnInit() {
  }

}
