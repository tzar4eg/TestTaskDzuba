import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selected-image',
  templateUrl: './selected-image.component.html',
  styleUrls: ['./selected-image.component.less']
})
export class SelectedImageComponent implements OnInit {
  @Input() image: string;
  @Output() forward: EventEmitter<any> = new EventEmitter();
  @Output() backward: EventEmitter<any> = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  
  onForward(): void {
    console.log('forward');
    this.forward.emit();
  }
  onBackward(): void {
    console.log('backward');

    this.backward.emit();
  }
  
}
