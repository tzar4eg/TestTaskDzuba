import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageViewerService {
  private _selectedImageIndex: number = 0;
  private _images: string[] = [];
  public isProcessedImages: boolean = false;
  constructor() { }
  
  setImagesUrl(images: string[]): void {
    this._images = images;
  }

  getStatus() : {total: number, selected: number} {
    return {total: this._images.length, selected: this._selectedImageIndex + 1}
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
  
  loadImages(images: string[]) {
    
  }

}
