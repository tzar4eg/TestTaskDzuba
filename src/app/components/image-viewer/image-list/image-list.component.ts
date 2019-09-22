import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-image-list",
  templateUrl: "./image-list.component.html",
  styleUrls: ["./image-list.component.less"]
})
export class ImageListComponent implements OnInit {
  @Input() images: string[];
  @Output() getIndex: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}
  onSelectImg(index: number) {
    this.getIndex.emit(index);
  }
}
