import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Content from '../../models/content';

@Component({
  selector: 'app-content-previewer',
  templateUrl: './content-previewer.component.html',
  styleUrls: ['./content-previewer.component.scss']
})
export class ContentPreviewerComponent implements OnInit {
  @Input()
  contents: Content[];

  @Output()
  click = new EventEmitter<Content>();

  constructor() {
    this.contents = [];
  }

  ngOnInit() {
  }

  onClick(content) {
    this.click.emit(content);
  }
}
