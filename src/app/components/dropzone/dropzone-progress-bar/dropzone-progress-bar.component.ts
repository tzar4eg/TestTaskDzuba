import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-dropzone-progress-bar',
  templateUrl: './dropzone-progress-bar.component.html',
  styleUrls: ['./dropzone-progress-bar.component.less']
})
export class DropzoneProgressBarComponent implements OnInit {
  @Input() uploadingStream: {stream: Observable<any>, fileName: string};
  @Input() progress: number = 0;
  constructor() { }

  ngOnInit() {
    this.uploadingStream.stream.subscribe(event => {
      if(event.type === HttpEventType.UploadProgress)  {
        this.progress = Math.round(event.loaded / event.total)
            }

    })
  }

}
