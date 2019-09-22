import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageViewerService {
  private _selectedImageIndex: number = 0;
  private _images: string[] = [];
  
  constructor() { }
  
  setImagesUrl(images: string[]): void {
    this._images = images;
  }

  getImagesUrl(): string[] {
    return this._images;
  }

  getSelectedIndex(): number {
    return this._selectedImageIndex;
  } 
  
  selectImage(index: number): void{
    this._selectedImageIndex = index;
  }
  getSelectedUrl(): string {
    return this._images[this._selectedImageIndex]
  }

  nextImage():void {
    if(this._selectedImageIndex === this._images.length - 1) {
      this._selectedImageIndex = 0;
      return;
    }
    this._selectedImageIndex++;

  }
  previousImage():void {
    if(this._selectedImageIndex === 0) {
      this._selectedImageIndex = this._images.length - 1;;
      return;
    }
    this._selectedImageIndex--;

  }

}
