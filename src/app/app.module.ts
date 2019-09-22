import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropzoneComponent } from './components/dropzone/dropzone.component';
import { DropzoneDirective } from './directives/dropzone.directive';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { SelectedImageComponent } from './components/image-viewer/selected-image/selected-image.component';
import { ImageListComponent } from './components/image-viewer/image-list/image-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageViewerService } from './services/image-viewer.service';

@NgModule({
  declarations: [
    AppComponent,
    DropzoneComponent,
    DropzoneDirective,
    ImageViewerComponent,
    SelectedImageComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ImageViewerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
