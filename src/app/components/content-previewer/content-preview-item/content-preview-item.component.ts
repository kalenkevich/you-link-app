import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Content from '../../../models/content';

@Component({
  selector: 'app-content-preview-item',
  templateUrl: './content-preview-item.component.html',
  styleUrls: ['./content-preview-item.component.scss']
})
export class ContentPreviewItemComponent implements OnInit {
  @Input()
  content: Content;

  @Output()
  click = new EventEmitter<Content>();

  constructor() { }

  ngOnInit() {
  }

  onCLick() {
    this.click.emit(this.content);
  }
}
