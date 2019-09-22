import { Component, OnInit, HostListener } from "@angular/core";
import { ImageViewerService } from 'src/app/services/image-viewer.service';

@Component({
  selector: "app-image-viewer",
  templateUrl: "./image-viewer.component.html",
  styleUrls: ["./image-viewer.component.less"]
})
export class ImageViewerComponent implements OnInit {
  selectedImg: any = '';
  constructor(public imgService: ImageViewerService) {}

  ngOnInit() {     
    this.selectedImg = this.imgService.getSelectedUrl();
  }

  onImageSelect(event): void {
    this.imgService.selectImage(event);
  }

  getPreviousImage(): void {
    this.imgService.previousImage();
  }

  getNextImage(): void {
    this.imgService.nextImage();
  }

  @HostListener("document:keyup", ["$event"])
  onKeyUp(event: KeyboardEvent): void {
    let keyFilter: string[] = ["ArrowLeft", "ArrowRight"];
    if (keyFilter.indexOf(event.code) < 0) return;
    event.preventDefault();
    event.code === "ArrowLeft" ? this.getPreviousImage() : this.getNextImage();
  }
}
