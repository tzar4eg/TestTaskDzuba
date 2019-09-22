import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selected-image',
  templateUrl: './selected-image.component.html',
  styleUrls: ['./selected-image.component.less']
})
export class SelectedImageComponent implements OnInit {
  @Input() image: string;
  
  constructor() { }
  ngOnInit() {
  }

}
