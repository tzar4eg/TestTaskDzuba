import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.less']
})
export class ImageListComponent implements OnInit {
  @Input() images: string[];

  constructor() { }

  ngOnInit() {
  }

}
