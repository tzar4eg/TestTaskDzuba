import { Component, OnInit } from "@angular/core";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-dropzone",
  templateUrl: "./dropzone.component.html",
  styleUrls: ["./dropzone.component.less"]
})
export class DropzoneComponent implements OnInit {
  public errorMessage = "";
  public warningMessage = false;
  constructor() {}
  ngOnInit() {}
  onFileChange(event: FileList): void {
    const images: File[] = Array.prototype.filter.call(event, (file: File) => {
      return file.type.match("image");
    });
    if (!images.length) {
      this.errorMessage = "Загрузить можно только изображения!";
      return;
    }
    if (images.length !== event.length) {
      this.warningMessage = true;
      this.errorMessage = `<div>Файлов: ${event.length}, Изображений: ${images.length}.</div><div>Будут загружены только изображения!</div>`;
      return;
    }
    this.errorMessage = "";
  }
}
