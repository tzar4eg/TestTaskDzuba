import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: "app-dropzone",
  templateUrl: "./dropzone.component.html",
  styleUrls: ["./dropzone.component.less"]
})
export class DropzoneComponent implements OnInit {
  public errorMessage = "";
  public warningMessage = false;
  public images: File[];
  public filesToUpload: { stream: Observable<any>; fileName: string }[];
  public imgLinks: string[] = [];
 
  @Output() uploadedImages: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor(private _http: HttpClient) {}
  ngOnInit() {
    this._http.get('http://localhost:4100/uploads/467-image_2019-08-31_22-04-07.png', {responseType: 'blob'}).subscribe(img => {
      let reader = new FileReader();
      reader.addEventListener("load", () => {
        this.image = reader.result;
      }, false )
      reader.readAsDataURL(img);
   
  })
  }
  onFileChange(event: FileList): void {
    this.images = Array.prototype.filter.call(event, (file: File) => {
      return file.type.match("image");
    });
    if (!this.images.length) {
      this.errorMessage = "Загрузить можно только изображения!";
      return;
    }
    if (this.images.length !== event.length) {
      this.warningMessage = true;
      this.errorMessage = `<div>Файлов: ${event.length}, Изображений: ${this.images.length}.</div><div>Будут загружены только изображения!</div>`;
      this.filesToUpload = this.uploadFiles(this.images);
      return;
    }
    this.filesToUpload = this.uploadFiles(this.images);
    this.errorMessage = "";
  }
  uploadFiles(images: File[]) {
    return Array.prototype.map.call(images, (image: File) => {
      return { stream: this.uploadFile(image), fileName: image.name };
    });
  }

  uploadFile(file: File): Observable<any> {
    let formData = new FormData();
    let url = "http://localhost:4100/upload";
    formData.append("image", file, file.name);
    return this._http.post(url, formData, {
      reportProgress: true,
      observe: "events"
    });
  }
  onUploadFile(img: string) {
    this.imgLinks.push(img);
    if (this.imgLinks.length === this.images.length) {
      this.uploadedImages.emit(this.imgLinks);
    }
  }
}
