import { Component } from '@angular/core';
import { ImageViewerService } from './services/image-viewer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  uploadedImages = []
  title = 'TestTaskDzuba';
  constructor(public imgService: ImageViewerService){}
  onUpload(images: string[]) {
    this.uploadedImages = images;
  }
}
