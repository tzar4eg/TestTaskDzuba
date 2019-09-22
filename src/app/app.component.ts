import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  uploadedImages = []
  title = 'TestTaskDzuba';

  onUpload(images: string[]) {
    this.uploadedImages = images;
  }
}
