import { Component, OnInit, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-selected-image",
  templateUrl: "./selected-image.component.html",
  styleUrls: ["./selected-image.component.less"]
})
export class SelectedImageComponent implements OnInit {
  @Input() image: string;
  @Input() status: {
    total: number,
    selected: number;
  }
  @Output() forward: EventEmitter<any> = new EventEmitter();
  @Output() backward: EventEmitter<any> = new EventEmitter();
  constructor() {}
  ngOnInit() {}

  onForward(): void {
    this.forward.emit();
  }
  onBackward(): void {
    this.backward.emit();
  }
}
