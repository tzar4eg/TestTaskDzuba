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
    let formData = new FormData();
    formData.append('image', files[0], files[0].name)
    let url = "http://localhost:4100/upload";    
    this._http.post(url, formData).subscribe((resp: {fileName: string}) => console.log(resp.fileName))
  }
}
