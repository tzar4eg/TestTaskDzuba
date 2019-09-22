import { Component, OnInit } from '@angular/core';
import { fakeImages } from './fake-images';


@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.less']
})
export class ImageViewerComponent implements OnInit {
  fakeImages = fakeImages;
  constructor() { }

  ngOnInit() {
  }

}
