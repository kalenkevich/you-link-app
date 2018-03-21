import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ContentSearchComponent } from './components/content-search/content-search.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ContentPreviewerComponent } from './components/content-previewer/content-previewer.component';
import { ContentPreviewItemComponent } from './components/content-previewer/content-preview-item/content-preview-item.component';
import {ContentProviderService} from './services/content-provider/content-provider.service';
import {UtilsService} from './services/utils/utils.service';
import { SpinnerComponent } from './components/spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentSearchComponent,
    SearchBarComponent,
    ContentPreviewerComponent,
    ContentPreviewItemComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ContentProviderService,
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
