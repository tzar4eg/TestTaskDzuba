import { Component, OnInit, HostListener } from "@angular/core";
import { fakeImages } from "./fake-images";

@Component({
  selector: "app-image-viewer",
  templateUrl: "./image-viewer.component.html",
  styleUrls: ["./image-viewer.component.less"]
})
export class ImageViewerComponent implements OnInit {
  fakeImages = fakeImages;
  selectedImage = "123";
  constructor() {}

  ngOnInit() {}

  selectImage(): void {

  }

  getPreviousImage(): void {
    console.log("Previous image");
  }

  getNextImage(): void {
    console.log("Next image");
  }

  @HostListener("document:keyup", ["$event"])
  onKeyUp(event: KeyboardEvent): void {
    let keyFilter: string[] = ["ArrowLeft", "ArrowRight"];
    if (keyFilter.indexOf(event.code) < 0) return;
    event.preventDefault();
    event.code === "ArrowLeft" ? this.getPreviousImage() : this.getNextImage();
  }
}
