import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { zip, forkJoin } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ImageViewerService {
  private _selectedImageIndex: number = 0;
  private _images: any[] = [];
  public isProcessedImages: boolean = false;
  constructor(private _http: HttpClient) {}

  setImagesUrl(images: any[]): void {
    this._images = images;
  }

  getStatus(): { total: number; selected: number } {
    return {
      total: this._images.length,
      selected: this._selectedImageIndex + 1
    };
  }

  getImages(): any[] {
    return this._images;
  }

  getSelectedIndex(): number {
    return this._selectedImageIndex;
  }

  selectImage(index: number): void {
    this._selectedImageIndex = index;
  }
  getSelectedUrl(): ArrayBuffer {
    return this._images[this._selectedImageIndex];
  }

  nextImage(): void {
    if (this._selectedImageIndex === this._images.length - 1) {
      this._selectedImageIndex = 0;
      return;
    }
    this._selectedImageIndex++;
  }
  previousImage(): void {
    if (this._selectedImageIndex === 0) {
      this._selectedImageIndex = this._images.length - 1;
      return;
    }
    this._selectedImageIndex--;
  }

  loadImages(images: string[]) {
    let baseString = "http://157.245.213.158:5001/";
    let images$ = images.map(el => {
      return this._http.get(baseString + "uploads/" + el, {
        responseType: "blob"
      });
    });
    forkJoin(images$).subscribe(el => {
      el.forEach(img => {
        let reader = new FileReader();
        reader.addEventListener(
          "load",
          () => {
            this._images.push(reader.result)
            if(this._images.length === images.length) {
              this.isProcessedImages = true;
            }
          },
          false
        );
        reader.readAsDataURL(img);
      });
    });
  }
}

/*

this._http
.get("uploads/467-image_2019-08-31_22-04-07.png", {
  responseType: "blob"
})
.subscribe(img => {
  let reader = new FileReader();
  reader.addEventListener(
    "load",
    () => {
      this.img = reader.result;
    },
    false
  );
  reader.readAsDataURL(img);
});

*/
