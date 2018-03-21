import {Component, Input, NgZone, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import Content from '../../models/content';
import {YT} from 'ngx-youtube-player/src/services/youtube-player.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit, OnChanges {
  @Input()
  video: Content;

  player: YT.Player;

  constructor(private zone: NgZone) {
    this.video = null;
  }

  ngOnInit() {
  }

  savePlayer(player) {
    this.player = player;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const video = this.video;

    this.zone.run(() => {
      this.video = null;
      setTimeout(() => this.video = video, 0);
    });
  }

}
