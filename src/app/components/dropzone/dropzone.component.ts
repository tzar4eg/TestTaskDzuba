import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-dropzone",
  templateUrl: "./dropzone.component.html",
  styleUrls: ["./dropzone.component.less"]
})
export class DropzoneComponent implements OnInit {
  public errorMessage = "";
  public warningMessage = false;
  constructor(private _http: HttpClient) {}
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
    this.upploadFiles(images)
    this.errorMessage = "";
  }

  upploadFiles(files: File[]) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': 'https//localhost:4200',
      })
    }
    let url = "http://localhost:5001/testtaskdzyuba/us-central1/onImageUpload";
    this._http.post(url, {test: 'test'}).subscribe(el => console.log(el))
  }
}
