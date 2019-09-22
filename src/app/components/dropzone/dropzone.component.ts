import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dropzone",
  templateUrl: "./dropzone.component.html",
  styleUrls: ["./dropzone.component.less"]
})
export class DropzoneComponent implements OnInit {
  constructor() {}
  testImagesArray = [];
  ngOnInit() {}
  onFileChange(event: FileList): void {
    const images: File[] = Array.prototype.filter.call(event, (file: File) => {
      return file.type.match("image");
    });
    this.testImagesArray = images;
  }
}
