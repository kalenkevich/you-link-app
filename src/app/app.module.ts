import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { YoutubePlayerModule } from 'ngx-youtube-player';

import { AppComponent } from './app.component';
import { ContentSearchComponent } from './components/content-search/content-search.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ContentPreviewerComponent } from './components/content-previewer/content-previewer.component';
import { ContentPreviewItemComponent } from './components/content-previewer/content-preview-item/content-preview-item.component';
import {ContentProviderService} from './services/content-provider/content-provider.service';
import {UtilsService} from './services/utils/utils.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ContentViewPlaceholderComponent } from './components/content-view-placeholder/content-view-placeholder.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentSearchComponent,
    SearchBarComponent,
    ContentPreviewerComponent,
    ContentPreviewItemComponent,
    SpinnerComponent,
    ContentViewPlaceholderComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    YoutubePlayerModule
  ],
  providers: [
    ContentProviderService,
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
